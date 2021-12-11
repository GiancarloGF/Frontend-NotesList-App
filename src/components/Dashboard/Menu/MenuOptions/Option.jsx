import React from "react";
// import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
import { BiNote, BiPlus, BiLogOutCircle, BiCog } from "react-icons/bi";
import { MdDashboard, MdOutlineNotificationsNone } from "react-icons/md";
function Option({
  text,
  active,
  onActiveHandler,
  onLogoutHandler,
}) {
  const isActiveClass = active === text ? Styles.active : "";
  const isLogoutClass = text === "Salir" ? Styles.logout : "";

  const renderIcon = () => {
    switch (text) {
      case "Dashboard":
        return <MdDashboard />;
      case "Notas":
        return <BiNote />;
      case "Nueva Nota":
        return <BiPlus />;
      case "Configuración":
        return <BiCog />;
      case "Notificaciones":
        return <MdOutlineNotificationsNone />;
      case "Salir":
        return <BiLogOutCircle />;
      default:
        return null;
    }
  };

  const onCLickHandler = () => {
    onActiveHandler(text);
    if (onLogoutHandler !== undefined) onLogoutHandler();
  };

  return (
    <div
      className={`${Styles.optionContainer} ${isActiveClass} ${isLogoutClass}`}
      onClick={onCLickHandler}
    >
      {" "}
      {renderIcon()}
      <h3 className={`${Styles.title}`}>{text}</h3>
    </div>
  );
}

export default Option;
