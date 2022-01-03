import React from "react";
// import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
import Icon from "../../Icons/index";
import { useSelector } from "react-redux";
function Option({
  text,
  active,
  onActiveHandler,
  onLogoutHandler,
}) {
  const isActiveClass = active === text ? Styles.active : "";
  const isLogoutClass = text === "Salir" ? Styles.logout : "";
  const color_theme=useSelector(state=>state.colorTheme)
  const onCLickHandler = () => {
    onActiveHandler(text);
    if (onLogoutHandler !== undefined) onLogoutHandler();
  };

  return (
    <div
      className={`${Styles.option_container} ${isActiveClass} ${isLogoutClass}`}
      onClick={onCLickHandler}
    >
      {" "}
      <Icon text={text}/>
      <h3 className={`${Styles.title}`}>{text}</h3>
    </div>
  );
}

export default Option;
