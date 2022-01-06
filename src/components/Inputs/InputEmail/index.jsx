import React from "react";
import Styles from "./styles.module.css";

export default function InputEmail({ formik, labelText, placeholder, id }) {
  return (
    <div
      className={`${Styles.inputContainer} ${
        formik.touched[id] && formik.errors[id] && Styles.error
      }
              
              ${
                formik.touched[id] &&
                !formik.errors[id] &&
                Styles.success
              }`}
    >
      <label htmlFor={id} className={Styles.label}>
        {labelText}
      </label>
      <input
        id={id}
        type="email"
        placeholder={placeholder}
        {...formik.getFieldProps(id)}
        className={`${Styles.input} 
                `}
      />
      <div className={Styles.errorMessage}>
        {formik.touched[id] && formik.errors[id] ? (
          <span>{formik.errors[id]}</span>
        ) : null}
      </div>
    </div>
  );
}
