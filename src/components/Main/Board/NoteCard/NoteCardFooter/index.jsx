import React, { useState } from "react";
import Styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Button from "../../../../Button";
import { AiOutlineClose } from "react-icons/ai";
import { toggleOptionsAction } from "../../../../../store/features/notes/notesSlice";
import Modal from "../../../../Modal";
import EditNoteForm from "../../../../forms/EditNoteForm";
import ConfirmAction from "../../../../ConfirmAction";
import { deleteNoteAction } from "../../../../../store/features/notes/notesSlice";

export default function NoteCardFooter({ handleDelete, id }) {
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
          handleDelete={handleDelete}
          handleShowOptions={handleShowOptions}
          id={id}
        />
      ) : (
        <Footer handleShowOptions={handleShowOptions} />
      )}
    </div>
  );
}

function Options({ handleShowOptions, id }) {
  const dispatch=useDispatch();
  // const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const onDelete = () => {
    setShowDeleteModal(true);
    // handleShowOptions();
  };
  const onEdit = () => {
    setShowEditModal(true);
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
      {showEditModal && (
        <Modal handleClose={() => setShowEditModal(false)}>
          <EditNoteForm handleClose={() => setShowEditModal(false)} id={id} />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal handleClose={() => setShowDeleteModal(false)}>
          {/* <EditNoteForm handleClose={()=>setShowDeleteModal(false)} id={id}/> */}
          <ConfirmAction
            text="¿Desea eliminar la nota seleccionada?"
            handleCancel={() => setShowDeleteModal(false)}
            handleConfirm={() => {
              dispatch(deleteNoteAction(id));
              setShowDeleteModal(false);
            }}
            handleClose={() => setShowDeleteModal(false)}
          />
        </Modal>
      )}
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
