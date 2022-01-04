import React from "react";
import Styles from "./styles.module.css";

export default function Textarea({placeholder, value, handleChange }) {

  return (
    <div className={`${Styles.textarea_container}`}>
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
