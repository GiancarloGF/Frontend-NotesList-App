import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./styles.module.css";
import Option from "./Option";

function MenuOptions() {
  const [active, setActive] = useState("Dashboard");
  const onActiveHandler = (name) => {
    setActive(name);
  };

  const onLogoutHandler = () => {
    localStorage.removeItem("loggedNoteappUser");
    window.location.href = "/";
  };

  return (
    <div className={`${Styles.menuOptions_container}`}>
      <Link to="/dashboard/" className={Styles.link}>
        <Option
          text="Dashboard"
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>
      <Link to="/dashboard/new_note" className={Styles.link}>
        <Option
          text="Nueva Nota"
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>
      <Link to="/dashboard/notes" className={Styles.link}>
        <Option
          text="Notas"
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>
      <Link to="/dashboard/notifications" className={Styles.link}>
        <Option
          text="Notificaciones"
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>
      <Link to="/dashboard/settings" className={Styles.link}>
        <Option
          text="Configuración"
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>

      <Option
        text="Salir"
        active={active}
        onActiveHandler={onActiveHandler}
        onLogoutHandler={onLogoutHandler}
      />
    </div>
  );
}

export default MenuOptions;
