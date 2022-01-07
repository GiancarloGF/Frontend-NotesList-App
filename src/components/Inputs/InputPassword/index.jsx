import React, { useEffect, useRef } from "react";
import Styles from "./styles.module.css";

export default function InputPassword({
  formik,
  labelText,
  placeholder,
  id,
  behave,
}) {

  // const onChange = (e) => {
  //   formik.setFieldValue(id, e.target.value);
  // };
  return (
    <div
      className={`${Styles.inputContainer} ${
        behave && formik.touched[id] && formik.errors[id] && Styles.error
      } ${
        behave && formik.touched[id] && !formik.errors[id] && Styles.success
      }`}
    >
      <label htmlFor={id} className={Styles.label}>
        {labelText}
      </label>
      <input
        type="password"
        placeholder={placeholder}
        {...formik.getFieldProps(id)}
        // onChange={onChange}
        // onBlur={formik.handleBlur}
        // value={formik.values.password}
        className={`${Styles.input}`}
      />
      <div className={Styles.errorMessage}>
        {formik.touched[id] && formik.errors[id] ? (
          <span>{formik.errors[id]}</span>
        ) : null}
      </div>
    </div>
  );
}
