import React, {useState} from "react";
import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
import { VscDiffAdded } from "react-icons/vsc";
import Modal from "../../../Modal";
import NewNoteForm from "../../../forms/NewNoteForm";




const NewNoteCard = () => {
  const color_theme = useSelector((state) => state.colorTheme);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div
        className={`${Styles.newNoteCard_container} ${Styles[color_theme]}`}
        onClick={handleShow}
      >
        <div className={Styles.newIcon}>
          <VscDiffAdded />
        </div>
      </div>
      {showModal && (
        <Modal handleClose={handleClose} >
          <NewNoteForm handleClose={handleClose}/>
        </Modal>
      )}
    </>
  );
};

export default NewNoteCard;
