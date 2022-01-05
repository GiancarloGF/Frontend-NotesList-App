import React from "react";
import { useSelector} from "react-redux";
import Styles from "./styles.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import NoteCardFooter from "./NoteCardFooter";

const NoteCard = ({ comment, date, title, status, isImportant, id }) => {
  const color_theme = useSelector((state) => state.colorTheme);
  const statusUpper = status.split("_").join(" ").toUpperCase();
  const handleEdit = () => {
    // const note = notes.find((n) => n.id === id); //Obtenemos la nota (objeto) que queremos modificar. Es una referencia a un valor de nuestro estado, !no modificar esta nota direnctamente!
    // const changedNote = { ...note, important: !note.important };//Copiamos el resultado de note para no afectar directamente el estado.

    // noteService
    //   .update(id, changedNote)
    //   .then((returnedNote) => {
    //     //Aqui podria agregar un mensaje exitoso.
    //     setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    //   })
    //   .catch((error) => setNotes(notes.filter((n) => n.id !== id)));
    console.log("Nota editada", id);
  };

  const handleDelete = () => {
    const isDelete = window.confirm("¿Desea eliminar esta nota?");
    if (isDelete) {
      console.log("Nota Eliminada", id);
    }
  };

  

  return (
    <div className={`${Styles.noteCard_container} ${Styles[color_theme]}`}>
      <div className={Styles.status_container}>
        <div className={`${Styles.circle} ${Styles[status]}`}></div>
        <p className={`${Styles.status}  ${Styles[status]}`}>{statusUpper}</p>
        {isImportant ? (
          <AiFillStar
            className={`${Styles.fillStar} ${Styles.star}`}
            // onClick={handleIsImportant}
          />
        ) : (
          <AiOutlineStar
            className={`${Styles.outlineStar} ${Styles.star}`}
            // onClick={handleIsImportant}
          />
        )}
      </div>
      <div className={`${Styles.title}  ${Styles[color_theme]}`}>{title}</div>
      <p className={`${Styles.comment} ${Styles[color_theme]}`}>{comment}</p>
      <NoteCardFooter
        date={date}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        id={id}
      />
    </div>
  );
};

export default NoteCard;
