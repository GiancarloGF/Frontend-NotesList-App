import React from "react";
import Icon from "./../../../Icons/index.jsx";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./styles.module.css";
function ColorThemeIcon() {
  const dispatch = useDispatch();
  const color_theme = useSelector((state) => state.colorTheme);
  const onToggleThemeHandler = () => {
    dispatch({ type: "COLOR_THEME/TOGGLE" });
  };
  return (
    <div className={`${Styles.colorThemeIcon_container} ${Styles[color_theme]}`}>
      <Icon
        text={color_theme === "light" ? "dark" : "light"}
        onClick={onToggleThemeHandler}
      />
    </div>
  );
}

export default ColorThemeIcon;
