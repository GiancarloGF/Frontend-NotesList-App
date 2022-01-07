import React from "react";
import Styles from "./styles.module.css";
import { useSelector } from "react-redux";

export default function Input({ type, placeholder, value, handleChange }) {
  const colorTheme = useSelector((state) => state.colorTheme);

  return (
    <div className={`${Styles.input_container} ${Styles[colorTheme]}`}>
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
