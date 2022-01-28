import React from "react";
import Styles from "./styles.module.css";
import { MdLocationPin, MdOutlineWaterDrop } from "react-icons/md";
import { WiStrongWind } from "react-icons/wi";
export default function Info({ location, speed, humidity }) {
  const kmXh = speed * 3.6;
  console.log(speed);
  return (
    <div className={Styles.locWeaInfo}>
      <div className={Styles.location}>
        <MdLocationPin />
        <span>{location}</span>
      </div>
      <div className={Styles.weatherInfo}>
        <div className={Styles.speed}>
          <WiStrongWind />
          {Math.floor(kmXh)} <span className={Styles.units}>km/h</span>
        </div>
        <div className={Styles.humidity}>
          <MdOutlineWaterDrop />
          {humidity} <span className={Styles.units}>%</span>
        </div>
      </div>
    </div>
  );
}
