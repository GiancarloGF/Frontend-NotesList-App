import React, { useState } from "react";
import Styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Button from "../../../../Button";
import { AiOutlineClose } from "react-icons/ai";
import { toggleOptionsAction } from "../../../../../store/features/notes/notesSlice";

function Options({ handleShowOptions, handleEdit, handleDelete }) {
  const onDelete = () => {
    handleDelete();
    handleShowOptions();
  };
  const onEdit = () => {
    handleEdit();
    handleShowOptions();
  };

  return (
    <div className={Styles.options}>
      <div className={Styles.options_buttons}>
        <Button
          variant="danger--outlined"
          text="Eliminar"
          size="small"
          handleClick={onDelete}
        />
        <Button
          variant="primary"
          text="Editar"
          size="small"
          handleClick={onEdit}
        />
      </div>
      <div className={Styles.close_icon} onClick={handleShowOptions}>
        <AiOutlineClose />
      </div>
    </div>
  );
}

function Footer({ date, handleShowOptions }) {
  const color_theme = useSelector((state) => state.colorTheme);
  const date_formatted = moment(date).format("YYYY-MM-DD");

  return (
    <div className={Styles.footer}>
      <span className={`${Styles.date} ${Styles[color_theme]}`}>
        {date_formatted}
      </span>
      <div className={Styles.options} onClick={handleShowOptions}>
        <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
        <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
        <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
      </div>
    </div>
  );
}

export default function NoteCardFooter({ handleEdit, handleDelete, id }) {
  const dispatch = useDispatch();
  const color_theme = useSelector((state) => state.colorTheme);
  const notes = useSelector((state) => state.notes.notes);
  const currentNote = notes.find((note) => note.id === id);

  const handleShowOptions = () => {
    dispatch(toggleOptionsAction(id, notes));
  };

  return (
    <div className={Styles.footer_container}>
      <hr className={`${Styles.line} ${Styles[color_theme]}`} />
      {currentNote.showingOptions ? (
        <Options
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleShowOptions={handleShowOptions}
        />
      ) : (
        <Footer handleShowOptions={handleShowOptions} />
      )}
    </div>
  );
}
