import React, { useState } from "react";
import Styles from "./styles.module.css";
import { useSelector } from "react-redux";
import moment from "moment";
import Button from "../../../../Button";
import { AiOutlineClose } from "react-icons/ai";

function Options({ handleCloseOptions }) {
  const handleDelete = () => {
    const isDelete = window.confirm("¿Desea eliminar esta nota?");
    if (isDelete) {
      console.log("Delete");
      handleCloseOptions();
    }
  };
  const handleEdit = () => {
    console.log("Edit");
    handleCloseOptions();
  };
  return (
    <div className={Styles.options}>
      <div className={Styles.options_buttons}>
        <Button
          variant="danger--outlined"
          text="Eliminar"
          size="small"
          handleClick={handleDelete}
        />
        <Button
          variant="primary"
          text="Editar"
          size="small"
          handleClick={handleEdit}
        />
      </div>
      <div className={Styles.close_icon} onClick={handleCloseOptions}>
        <AiOutlineClose />
      </div>
    </div>
  );
}

function Footer({ date, handleOpenOptions }) {
  const color_theme = useSelector((state) => state.colorTheme);
  const date_formatted = moment(date).format("YYYY-MM-DD");

  return (
    <div className={Styles.footer}>
      <span className={`${Styles.date} ${Styles[color_theme]}`}>
        {date_formatted}
      </span>
      <div className={Styles.options} onClick={handleOpenOptions}>
        <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
        <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
        <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
      </div>
    </div>
  );
}

export default function NoteCardFooter() {
  const color_theme = useSelector((state) => state.colorTheme);
  const [showOptions, setShowOptions] = useState(false);
  const handleOpenOptions = () => {
    setShowOptions(true);
  };
  const handleCloseOptions = () => {
    setShowOptions(false);
  };
  return (
    <div className={Styles.footer_container}>
      <hr className={`${Styles.line} ${Styles[color_theme]}`} />
      {showOptions ? (
        <Options handleCloseOptions={handleCloseOptions} />
      ) : (
        <Footer handleOpenOptions={handleOpenOptions} />
      )}
    </div>
  );
}
