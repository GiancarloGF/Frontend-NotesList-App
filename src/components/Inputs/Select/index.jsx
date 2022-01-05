import React from "react";
import Styles from "./styles.module.css";


export default function Select({handleChange, value}) {
  return (
    <div className={Styles.select_container}>
      <select id="standard-select" className={Styles.select} onChange={handleChange} value={value}> 
        <option value="created">CREADO</option>
        <option value="in_progress">EN PROGRESO</option>
        <option value="completed">TERMINADO</option>
      </select>
      <span className={Styles.select_focus}></span>
    </div>
  );
}
