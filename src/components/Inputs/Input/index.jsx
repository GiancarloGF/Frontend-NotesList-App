import React from "react";
import Styles from "./styles.module.css";

export default function Input({ type, placeholder, value, handleChange }) {

  return (
    <div className={`${Styles.input_container}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={Styles.input}
      />
      <span className={Styles.input_focus}></span>
    </div>
  );
}
