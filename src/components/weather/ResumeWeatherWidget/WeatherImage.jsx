import React, { useRef, useEffect } from "react";
import Styles from "./styles.module.css";
import uppFirstLetter from "../../../utils/upFirstLetter";

export default function WeatherImage({ iconCode, description }) {

  const ICON_URL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  let imgRef = useRef(null);
  useEffect(() => {
    imgRef.current.style.backgroundImage = `url(${ICON_URL})`;
  });
  return (
    <div className={Styles.weatherImage}>
      <div className={Styles.image_container} ref={imgRef}></div>
      <span className={Styles.description}>{uppFirstLetter(description)}</span>
    </div>
  );
}
