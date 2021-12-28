import React, { useEffect } from "react";
import Styles from "./styles.module.css";
import NoteCard from "./NoteCard/index";
import { getAllAction } from "../../../../store/features/notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";
// import noteService from "../../../../services/notesService";
function Board() {
  let notesState = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  console.log(notesState);
  useEffect(() => {
    dispatch(getAllAction());
  }, []);

  return (
    <div className={Styles.board_container}>
      <div className={`${Styles.created} ${Styles.column}`}>
        {notesState.map((note) => {
          return (
            <NoteCard
            key={note.id}
              isImportant={note.isImportant}
              comment={note.comment}
              title={note.title}
              status={note.status}
              date={note.date}
            />
          );
        })}
      </div>
      <div className={`${Styles.progress} ${Styles.column}`}></div>
      <div className={`${Styles.completed} ${Styles.column}`}></div>
    </div>
  );
}

export default Board;
