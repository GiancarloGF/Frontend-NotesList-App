import React from "react";
import Styles from "./styles.module.css";
import { useSelector } from "react-redux";

export default function Select({handleChange, value}) {
  const colorTheme = useSelector((state) => state.colorTheme);
  return (
    <div className={`${Styles.select_container} ${Styles[colorTheme]}`}>
      <select id="standard-select" className={Styles.select} onChange={handleChange} value={value}> 
        <option value="created">CREADO</option>
        <option value="in_progress">EN PROGRESO</option>
        <option value="completed">TERMINADO</option>
      </select>
      <span className={Styles.select_focus}></span>
    </div>
  );
}
