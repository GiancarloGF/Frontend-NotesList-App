import React, {useState} from "react";
const NoteForm=({createNote, userName})=>{
      const [newNote, setNewNote] = useState(""); //Estado que guarda el valor de una nota actual.Este valor controla el valor del input del fomulario (componente controlado)
      const handleNoteChange = (e) => {setNewNote(e.target.value);};
        
      const addNote = (e) => {
            e.preventDefault();
            //Modelo de dato que se guardara.
            createNote({content: newNote, important: Math.random() > 0.5})
            setNewNote('')
      }
      return (
            <di>
                  <h2>Hola {userName} 🖐, puedes crear una nueva nota 📝</h2>
                  <form onSubmit={addNote}>
                        <input value={newNote} onChange={handleNoteChange} placeholder="Agregar nueva nota..." />
                        <button type="submit">save</button>
                  </form>
            </di>
      )
}
export default NoteForm;