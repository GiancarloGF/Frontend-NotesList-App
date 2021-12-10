import React from "react";
import UserWidget from "../widgets/UserWidget";
import WeatherWidget from "../widgets/WeatherWidget";
import Styles from "./styles.module.css";

function GeneralReport() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.widgets}>
          <UserWidget />
          <WeatherWidget />
          <UserWidget />
          <WeatherWidget />
        </div>
      </div>
      {/* <div className={Styles.bottom}></div> */}
    </>
  );
}

export default GeneralReport;
