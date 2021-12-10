import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.css";
import Option from "./Option";

function Menu({ menuActive }) {
  const [active, setActive] = useState("Dashboard");
  const onActiveHandler = (name) => {
    setActive(name);
  };

  const onLogoutHandler = () => {
    localStorage.removeItem("loggedNoteappUser");
    window.location.href = "/";
  };

  const menu_active_class = menuActive ? Styles.menu_active : "";
  return (
    <div className={`${Styles.menuContainer} ${menu_active_class}`}>
      <Link to="/dashboard/" className={Styles.link}>
        <Option
          text="Dashboard"
          menuActive={menuActive}
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>
      <Link to="/dashboard/new_note" className={Styles.link}>
        <Option
          text="Nueva Nota"
          menuActive={menuActive}
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>
      <Link to="/dashboard/notes" className={Styles.link}>
        <Option
          text="Notas"
          menuActive={menuActive}
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>
      <Link to="/dashboard/notifications" className={Styles.link}>
        <Option
          text="Notificaciones"
          menuActive={menuActive}
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>
      <Link to="/dashboard/settings" className={Styles.link}>
        <Option
          text="Configuración"
          menuActive={menuActive}
          active={active}
          onActiveHandler={onActiveHandler}
        />
      </Link>

      <Option
        text="Salir"
        menuActive={menuActive}
        active={active}
        onActiveHandler={onActiveHandler}
        onLogoutHandler={onLogoutHandler}
      />
    </div>
  );
}

export default Menu;
