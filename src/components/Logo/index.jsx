import React from "react";
// import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
function Logo() {
  return (
    <div className={`${Styles.logoContainer}`}>
      <>
        <h1>FN</h1>
        <span>FastNotes</span>
      </>
    </div>
  );
}

export default Logo;
