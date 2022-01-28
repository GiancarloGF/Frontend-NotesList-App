import React from "react";
// import UserWidget from "../widgets/UserWidget";
// import WeatherWidget from "../widgets/WeatherWidget";
import Styles from "./styles.module.css";
import Board from "../Board/index";
import Widgets from "../../Widgets";

function GeneralReport() {
  return (
    <>
      <div className={Styles.generalReport_container}>
        <Board />
        <Widgets/>
      </div>
      {/* <div className={Styles.bottom}></div> */}
    </>
  );
}

export default GeneralReport;
