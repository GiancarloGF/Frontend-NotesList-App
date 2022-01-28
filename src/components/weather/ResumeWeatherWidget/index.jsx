import React, { useState, useEffect } from "react";
import Styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getByLocationAction } from "../../../store/features/weather/weatherSlice";
import Degrees from "./Degrees";
import LocWeaInfo from "./LocWeaInfo";
import WeatherImage from "./WeatherImage";
import getCurrentDate  from "../../../utils/getCurrentDate.js";
import uppFirstLetter from "../../../utils/upFirstLetter";
export default function ResumeWeatherWidget() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      dispatch(getByLocationAction(lat, lon));
      setCurrentDate(uppFirstLetter(getCurrentDate.weekdayMonthDay()));
    });
  }, []);
  console.log(weather);
  return weather.name ? (
    <div className={Styles.ResumeWeatherWidget_container}>
      <Degrees degrees={weather.main.temp} />
      <LocWeaInfo
        location={weather.name}
        speed={weather.wind.speed}
        humidity={weather.main.humidity}
      />
      <WeatherImage
        description={weather.weather[0].description}
        iconCode={weather.weather[0].icon}
      />
      <div className={Styles.date}>
        <span>{currentDate}</span>
      </div>
    </div>
  ) : (
    "Loading..."
  );
}
