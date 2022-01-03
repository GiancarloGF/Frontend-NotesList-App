import React from "react";
// import UserWidget from "../widgets/UserWidget";
// import WeatherWidget from "../widgets/WeatherWidget";
import Styles from "./styles.module.css";
import Board from '../Board/index';
function GeneralReport() {
  return (
    <>
      <div className={Styles.generalReport_container}>
        <Board />
      </div>
      {/* <div className={Styles.bottom}></div> */}
    </>
  );
}

export default GeneralReport;
