import React from "react";
import { useSelector } from "react-redux";
import Styles from "./styles.module.css";

const NoteCard = ({ comment, date, title, status }) => {
  const color_theme = useSelector((state) => state.colorTheme);
  const statusUpper = status.split("_").join(" ").toUpperCase();
  return (
    <div className={`${Styles.noteCard_container} ${Styles[color_theme]}`}>
      <div className={Styles.status_container}>
        <div className={`${Styles.circle} ${Styles[status]}`}></div>
        <p className={`${Styles.status}  ${Styles[status]}`}>{statusUpper}</p>
      </div>
      <div className={`${Styles.title}  ${Styles[color_theme]}`}>{title}</div>
      <p className={`${Styles.comment} ${Styles[color_theme]}`}>{comment}</p>
      <div className={Styles.footer_container}>
        <hr className={`${Styles.line} ${Styles[color_theme]}`} />
        <div className={Styles.footer}>
          <span className={`${Styles.date} ${Styles[color_theme]}`}>
            {date}
          </span>
          <div className={Styles.options}>
            <div
              className={`${Styles.circle_option} ${Styles[color_theme]}`}
            ></div>
            <div
              className={`${Styles.circle_option} ${Styles[color_theme]}`}
            ></div>
            <div
              className={`${Styles.circle_option} ${Styles[color_theme]}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
