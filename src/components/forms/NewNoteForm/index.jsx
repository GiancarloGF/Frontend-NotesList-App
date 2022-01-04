import React from "react";
import Styles from "./styles.module.css";
import Button from "../../Button";
import Select from "../../Inputs/Select";
import Input from "../../Inputs/Input";
import Textarea from "../../Inputs/Textarea";

function NewNoteForm({ handleClose, handleConfirm }) {
  return (
    <div className={Styles.newNoteForm_container}>
      <form action="submit" className={Styles.formContent}>
        <Select />
        <Input type="text" placeholder="Titulo de Nota"/>
        <Textarea type="text-area" placeholder="Escribir comentario adicional..."/>
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
