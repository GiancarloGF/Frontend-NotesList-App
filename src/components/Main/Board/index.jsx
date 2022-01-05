import React, { useEffect } from "react";
import Styles from "./styles.module.css";
import NoteCard from "./NoteCard/index";
import NewNoteCard from "./NewNoteCard/index";

import { getAllAction } from "../../../store/features/notes/notesSlice";
import { useDispatch, useSelector } from "react-redux";
// import noteService from "../../../../services/notesService";
function Board() {
  const dispatch = useDispatch();
  let allNotes = useSelector((state) => state.notes.notes);
  useEffect(() => {
    dispatch(getAllAction());
  }, [dispatch]);

  return (
    <div className={Styles.board_container}>
      <div className={`${Styles.created} ${Styles.column}`}>
        <NewNoteCard />
        {allNotes.map((note) => {
          if (note.status === "created") {
            return (
              <NoteCard
                key={note.id}
                isImportant={note.important}
                comment={note.comment}
                title={note.title}
                status={note.status}
                date={note.date}
              />
            );
          }
        })}
      </div>
      <div className={`${Styles.progress} ${Styles.column}`}>
        {allNotes.map((note) => {
          if (note.status === "in_progress") {
            return (
              <NoteCard
                key={note.id}
                isImportant={note.important}
                comment={note.comment}
                title={note.title}
                status={note.status}
                date={note.date}
              />
            );
          }
        })}
      </div>
      <div className={`${Styles.completed} ${Styles.column}`}>
        {allNotes.map((note) => {
          if (note.status === "completed") {
            return (
              <NoteCard
                key={note.id}
                isImportant={note.important}
                comment={note.comment}
                title={note.title}
                status={note.status}
                date={note.date}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Board;
