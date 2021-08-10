import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import Footer from "./components/Footer";
import SuccesMessage from "./components/SuccesMessage";
import ErrorMessage from "./components/ErrorMessage";
import Togglable from "./components/Togglable";
import LoginForm from "./components/LoginForm";
import NoteForm from "./components/NoteForm";
import noteService from "./services/notes";
import loginService from "./services/login";

const App = () => {
  const [notes, setNotes] = useState([]); //Estado que guarda las notas.
  const [newNote, setNewNote] = useState(""); //Estado que guarda el valor de una nota actual.Este valor controla el valor del input del fomulario (componente controlado)
  const [showAll, setShowAll] = useState(true);
  const [succesMessage, setSuccesMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [user, setUser]= useState(null);
  // const [loginVisible, setLoginVisible]=useState(false);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []); //useEffect(funcion de efecto, array de elementos que renderizaran useEffect cuando estos cambien)

  // Cuando se carga la pagina, se verifica si el usuario ya esta logeado. Si no borramos los datos del localstroge, siempre estaremos logeados.
  useEffect(() => {
    const loggedUserJSON=window.localStorage.getItem('loggedNoteappUser');
    if(loggedUserJSON){
      const user=JSON.parse(loggedUserJSON);
      setUser(user);//actualizamos nuestro estado user.
      noteService.setToken(user.token);//Guardo el token para luego mandarlo al servidor cuando se crea una nueva nota.
    }
  },[])

  const addNote = (e) => {
    e.preventDefault();
    //Modelo de dato que se guardara.
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    };

    noteService.create(noteObject).then((returnedNote) => {
      setSuccesMessage(`Nota creada exitosamente`);
      setTimeout(() => {
        setSuccesMessage(null);
      }, 5000);
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id); //Obtenemos la nota (objeto) que queremos modificar. Es una referencia a un valor de nuestro estado, !no modificar esta nota direnctamente!
    const changedNote = { ...note, important: !note.important };

    /*Esta opcion no es valida(aunque hace lo mismo): 
        const note = notes.find(n => n.id === id)
        note.important = !note.important

        La variable note es una referencia a un elemento en el array notes en el estado del componente, y como recordamos, nunca debemos mutar el estado directamente en React.

     */
    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        //Aqui podria agregar un mensaje exitoso.
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        //setErrorMessage(`the note ${note.content} was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const handleNoteChange = (e) => {
    //console.log(e.target.value);
    setNewNote(e.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true); //tambien es valido: (note)=>note.important-> devuelve un nuevo array con las note que cumplan la condicion.

  //HandleEvent to validate login and save token from server each time we log in.
  const handleLogin= async (event) => {
    event.preventDefault();
    try {
      const user= await loginService.login({username, password});//Get the response from server if login is successful.
      
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));//Token saved in localstorage first.
      noteService.setToken(user.token);//It take token and save it in a variable in services/noteService.js.

      setUser(user);//Token, username and name are saved in user state.
      setUsername('')//To clean the username input.
      setPassword('')//To clean the password input.
      setSuccesMessage(`Login exitoso`);//Display an succesed message.
      setTimeout(() => {
        setSuccesMessage(null);
      }, 5000);
    } catch (exception) {
      setErrorMessage('Wrong credentials')//Display an error message in the front.
      setTimeout(() => {//To clean the error message.
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleUsername = ({target}) =>setUsername(target.value) 
  const handlePassword= ({target}) =>setPassword(target.value)
  // const handleLoginVisible=() => setLoginVisible(true)

  return (
    <div>
      <h1>Notes</h1>
      {/**Mensaje de error customizado */}
      <ErrorMessage message={errorMessage} />
      {/**Mensaje de exito customizado */}
      <SuccesMessage message={succesMessage} />

      {/* Mostramos el form de login o el form de notas segun el estado user(logeado o no), tambien mostramos el nombre si se logea correctamente.*/}
      {/* {user ===null && loginForm()}
      {user !== null && noteForm()} */}
      {user===null
      ?(
        <Togglable buttonLabel='log in'>
          <LoginForm 
            handleLogin={handleLogin} 
            handlePassword={handlePassword} 
            handleUsername={handleUsername}
            username={username} 
            password={password}
          />
        </Togglable>
      )
      :(
        <NoteForm 
            addNote={addNote}  
            name={user.name} 
            newNote={newNote} 
            handleNoteChange={handleNoteChange}/>)}

      {/* Boton para cambiar estado a importante o no */}
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>

      {/* Listas de notas renderizadas */}
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

     {/* Footer */}
      <Footer />
    </div>
  );
};
export default App;
