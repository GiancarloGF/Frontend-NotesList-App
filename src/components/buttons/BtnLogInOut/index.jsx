import React from "react";

import Styles from "./styles.module.css";

function BtnLogInOut({ text, onClick, variation, type }) {
  const className =
    variation === "primary" ? Styles.btnPrimary : Styles.btnSecondary;

  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
}

export default BtnLogInOut;
