import React from "react";
import Styles from "./styles.module.css";
import { BiNote, BiPlus, BiLogOutCircle, BiCog } from "react-icons/bi";
import { MdDashboard, MdOutlineNotificationsNone } from "react-icons/md";
function Option({ text, active, onActiveHandler, menuActive, onLogoutHandler }) {
  const isActiveClass = active === text ? Styles.active : "";
  const isLogoutClass = text === "Salir" ? Styles.logout : "";
  const isMenuActiveClass = menuActive ? Styles.menu_active : "";
  

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

  let renderClass = () => {
    switch (text) {
      case "Dashboard":
        return Styles.dashboard;
      case "Notas":
        return Styles.notes;
      case "Nueva Nota":
        return Styles.newNote;
      case "Notificaciones":
        return Styles.notifications;
      case "Configuración":
        return Styles.setting;
      case "Salir":
        return Styles.logout;
      default:
        return null;
    }
  };

  const onCLickHandler = () => {
    onActiveHandler(text);
    if(onLogoutHandler!==undefined){
      onLogoutHandler();
    }
  }

  return (
    <div
      className={`${
        Styles.optionContainer
      }  ${renderClass()} ${isActiveClass} ${isLogoutClass} ${isMenuActiveClass}`}
      onClick={onCLickHandler}
    >
      {" "}
      {renderIcon()}
      {menuActive && <h3 className={`${Styles.title}`}>{text}</h3>}
    </div>
  );
}

export default Option;
