import React, { useState } from "react";
import Styles from "./styles.module.css";
import Button from "../../Button";
import Select from "../../Inputs/Select";
import Input from "../../Inputs/Input";
import Textarea from "../../Inputs/Textarea";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
// import noteService from "../../../services/notesService";
import {useDispatch, useSelector} from "react-redux";
import {createAction} from "../../../store/features/notes/notesSlice"


function NewNoteForm({ handleClose }) {
  const dispatch = useDispatch();

  const [isImportant, setIsImportant] = useState(false);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("created");

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
      isImportant,
    }
    
    dispatch(createAction(newNote));
    handleClose();
  };

  return (
    <div className={Styles.newNoteForm_container}>
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
        />
        <Button
          type="submit"
          handleClick={handleConfirm}
          variant="primary"
          text="Crear Nota"
        />
      </div>
    </div>
  );
}

export default NewNoteForm;
