import React from "react";
import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import NoteCardFooter from "./NoteCardFooter";
const NoteCard = ({ comment, date, title, status, isImportant }) => {
  const color_theme = useSelector((state) => state.colorTheme);
  const statusUpper = status.split("_").join(" ").toUpperCase();
  return (
    <div className={`${Styles.noteCard_container} ${Styles[color_theme]}`}>
      <div className={Styles.status_container}>
        <div className={`${Styles.circle} ${Styles[status]}`}></div>
        <p className={`${Styles.status}  ${Styles[status]}`}>{statusUpper}</p>
        {isImportant ? (
          <AiFillStar
            className={`${Styles.fillStar} ${Styles.star}`}
            // onClick={handleIsImportant}
          />
        ) : (
          <AiOutlineStar
            className={`${Styles.outlineStar} ${Styles.star}`}
            // onClick={handleIsImportant}
          />
        )}
      </div>
      <div className={`${Styles.title}  ${Styles[color_theme]}`}>{title}</div>
      <p className={`${Styles.comment} ${Styles[color_theme]}`}>{comment}</p>
      <NoteCardFooter date={date} />
    </div>
  );
};

export default NoteCard;
