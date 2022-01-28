import React from "react";
// import UserWidget from "../widgets/UserWidget";
// import WeatherWidget from "../widgets/WeatherWidget";
import Styles from "./styles.module.css";
import ResumeWeatherWidget from "../weather/ResumeWeatherWidget";
function Widgets() {
  return (
    <>
      <div className={Styles.Widgets_container}>
        <ResumeWeatherWidget />
      </div>
    </>
  );
}

export default Widgets;
