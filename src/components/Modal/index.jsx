// import ButtonsModal from "../ButtonsModal";
import Styles from "./styles.module.css";
import { useSelector } from "react-redux";

import Button from "../Button";
export default function Modal({ children, handleClose, handleConfirm }) {
  const color_theme = useSelector((state) => state.colorTheme);
  return (
    <>
      <div className={Styles.modal_overlay} onClick={()=>handleClose()}></div>
      <div className={`${Styles.modal_content} ${Styles[color_theme]}`}>
        <div>{children}</div>
        {/* <ButtonsModal
          handleClose={handleClose}
          handleConfirm={handleConfirm}
          confirmText="Crear"
        /> */}
        <div className={Styles.buttons}>
          <Button type="text" handleClick={handleClose} variant="danger--outlined" text="Cancelar"/>
          <Button type="submit" handleClick={handleConfirm} variant="primary" text="Crear Nota"/>
        </div>
      </div>
    </>
  );
}
