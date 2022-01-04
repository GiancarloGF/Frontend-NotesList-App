import React from "react";
import Styles from "./styles.module.css";


export default function Select() {
  return (
    <div className={Styles.select_container}>
      <select id="standard-select" className={Styles.select}>
        <option value="Option 1">CREADO</option>
        <option value="Option 2">EN PROGRESO</option>
        <option value="Option 3">TERMINADO</option>
      </select>
      <span className={Styles.select_focus}></span>
    </div>
  );
}
