import React from "react";
import Styles from "./styles.module.css";
import { useSelector } from "react-redux";

export default function Textarea({placeholder, value, handleChange }) {
  const colorTheme = useSelector((state) => state.colorTheme);

  return (
    <div className={`${Styles.textarea_container} ${Styles[colorTheme]}`}>
      <textarea 
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={Styles.textarea}
      />
      {/* <span className={Styles.textarea_focus}></span> */}
    </div>
  );
}
