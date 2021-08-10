const NoteForm=({addNote,newNote, handleNoteChange,name})=>{
      return (
            <di>
                  <h2>hola {name} 🖐</h2>
                  <form onSubmit={addNote}>
                        <input value={newNote} onChange={handleNoteChange} placeholder="Agregar nueva nota..." />
                        <button type="submit">save</button>
                  </form>
            </di>
      
      )
}
export default NoteForm;