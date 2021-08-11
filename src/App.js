import React, { useState, useEffect,useRef } from "react";
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
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [succesMessage, setSuccesMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser]= useState(null);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {setNotes(initialNotes);});
  }, []);

  // Cuando se carga la pagina, se verifica si el usuario ya esta logeado. Si no borramos los datos del localstroge, siempre estaremos logeados.
  useEffect(() => {
    const loggedUserJSON=window.localStorage.getItem('loggedNoteappUser');
    if(loggedUserJSON){
      const user=JSON.parse(loggedUserJSON);
      setUser(user);//actualizamos nuestro estado user.
      noteService.setToken(user.token);//Guardo el token para luego mandarlo al servidor cuando se crea una nueva nota.
    }
  },[])

  const addNote = (noteObject) => {
    noteService
    .create(noteObject)
    .then((returnedNote) => {
      setSuccesMessage(`Nota creada exitosamente`);
      setTimeout(() =>setSuccesMessage(null), 5000);
      setNotes(notes.concat(returnedNote));
    });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id); //Obtenemos la nota (objeto) que queremos modificar. Es una referencia a un valor de nuestro estado, !no modificar esta nota direnctamente!
    const changedNote = { ...note, important: !note.important };//Copiamos el resultado de note para no afectar directamente el estado.

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        //Aqui podria agregar un mensaje exitoso.
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => setNotes(notes.filter((n) => n.id !== id)));
  };

  const notesToShow = showAll? notes: notes.filter((note) => note.important === true); //tambien es valido: (note)=>note.important-> devuelve un nuevo array con las note que cumplan la condicion.

  //HandleEvent to validate login and save token from server each time we log in.
  const handleLogin= async (username, password) => {
    try {
      const user= await loginService.login({username, password});//Get the response from server if login is successful.
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));//Token saved in localstorage first.
      noteService.setToken(user.token);//It take token and save it in a variable in services/noteService.js.
      setUser(user);//Token, username and name are saved in user state.
      setSuccesMessage(`Login exitoso`);//Display an succesed message.
      setTimeout(() => setSuccesMessage(null), 5000);
    } catch (exception) {
      setErrorMessage('Wrong credentials')//Display an error message in the front.
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  //Guardo una referencia de mi componente NoteForm que esta dentro de Togglable.
  const noteFormRef=useRef()

  return (
    <div>
      <h4>Esto fue escrito en la rama de prueba</h4>
      <h1>Notes</h1>
      {/**Mensaje de error customizado */}
      <ErrorMessage message={errorMessage} />
      {/**Mensaje de exito customizado */}
      <SuccesMessage message={succesMessage} />
      
      {/* Mostramos el form de login o el form de notas segun el estado user(logeado o no), tambien mostramos el nombre si se logea correctamente.*/}
      {user===null
      ?(
        <Togglable buttonLabel='log in'>
          <LoginForm handleLogin={handleLogin}/>
        </Togglable>
      )
      :(<>
        <h2>Hola {user.name} 🖐, puedes crear una nueva nota 📝</h2>
        <Togglable  buttonLabel='new note' ref={noteFormRef}>
          <NoteForm createNote={addNote} userName={user.name}/>
        </Togglable>
        </>
      
      )}

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
