import React, { useState } from "react";
import Styles from "./styles.module.css";
import Button from "../../Button";
import Select from "../../Inputs/Select";
import Input from "../../Inputs/Input";
import Textarea from "../../Inputs/Textarea";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
// import noteService from "../../../services/notesService";
import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../../../store/features/notes/notesSlice";

function EditNoteForm({ handleClose, id }) {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const currentNote = notes.find((note) => note.id === id);

  const [isImportant, setIsImportant] = useState(currentNote.important);
  const [title, setTitle] = useState(currentNote.title);
  const [comment, setComment] = useState(currentNote.comment);
  const [status, setStatus] = useState(currentNote.status);

  const handleIsImportant = () => {
    setIsImportant(!isImportant);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleConfirm = () => {
    const newNote = {
      title,
      comment,
      status,
      important: isImportant,
    };

    dispatch(updateAction(id,newNote));
    handleClose();
  };

  return (
    <div className={Styles.editNoteForm_container}>
      <form action="submit" className={Styles.form_content}>
        <div className={Styles.form_top}>
          <Select handleChange={handleStatus} value={status} />
          {isImportant ? (
            <AiFillStar
              className={Styles.fillStar}
              onClick={handleIsImportant}
            />
          ) : (
            <AiOutlineStar
              className={Styles.outlineStar}
              onClick={handleIsImportant}
            />
          )}
        </div>
        <Input
          type="text"
          placeholder="Titulo de Nota"
          handleChange={handleTitle}
          value={title}
        />
        <Textarea
          type="text-area"
          placeholder="Escribir comentario adicional..."
          handleChange={handleComment}
          value={comment}
        />
      </form>
      <div className={Styles.buttons}>
        <Button
          type="text"
          handleClick={handleClose}
          variant="danger--outlined"
          text="Cancelar"
          size="normal"
        />
        <Button
          type="submit"
          handleClick={handleConfirm}
          variant="primary"
          text="Editar Nota"
          size="normal"
        />
      </div>
    </div>
  );
}

export default EditNoteForm;
