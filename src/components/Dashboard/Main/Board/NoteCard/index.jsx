import React from "react";
import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
function NoteCard() {
const color_theme= useSelector(state=>state.colorTheme);
  const note_status='created';
  return (
    <div className={`${Styles.noteCard_container} ${Styles[color_theme]}`}>
      <div className={Styles.status_container}>
        <div className={`${Styles.circle} ${Styles[note_status]}`}></div>
        <p className={`${Styles.status}  ${Styles[note_status]}`}>CREATED</p>
      </div>
      <div className={`${Styles.title}  ${Styles[color_theme]}`}>MAKE THE DINNER</div>
      <p className={`${Styles.comment} ${Styles[color_theme]}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, facilis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, facilis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, facilis.
      </p>
      <div className={Styles.footer_container}>
          <hr className={`${Styles.line} ${Styles[color_theme]}`}/>
          <div className={Styles.footer}>
              <span className={`${Styles.date} ${Styles[color_theme]}`}>Jul, 30 Sunday</span>
              <div className={Styles.options}>
                  <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
                  <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
                  <div className={`${Styles.circle_option} ${Styles[color_theme]}`}></div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default NoteCard;
