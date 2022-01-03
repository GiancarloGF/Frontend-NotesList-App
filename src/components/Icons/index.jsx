import React from "react";
import Styles from "./styles.module.css";
import { BiNote, BiPlus, BiLogOutCircle, BiCog } from "react-icons/bi";
import { MdDashboard, MdOutlineNotificationsNone,MdLightMode,MdModeNight } from "react-icons/md";

function Icon({ text, onClick }) {
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
      case "light":
        return <MdLightMode />;
      case "dark":
        return <MdModeNight />;
      default:
        return null;
    }
  };

  const handleClick = () => {
      onClick!==undefined && onClick();
  }

  return <div className={Styles.icon_container} onClick={handleClick}>{renderIcon()}</div>;
}

export default Icon;
