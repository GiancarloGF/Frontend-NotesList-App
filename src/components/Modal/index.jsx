// import ButtonsModal from "../ButtonsModal";
import Styles from "./styles.module.css";
import { useSelector } from "react-redux";

export default function Modal({ children, handleClose }) {
  const color_theme = useSelector((state) => state.colorTheme);
  return (
    <>
      <div className={Styles.modal_overlay} onClick={()=>handleClose()}></div>
      <div className={`${Styles.modal_content} ${Styles[color_theme]}`}>
        {children}
      </div>
    </>
  );
}
