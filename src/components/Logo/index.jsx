import React from "react";
import Styles from "./styles.module.css";
function Logo({ menuActive }) {
  const menuActiveClass = menuActive ? Styles.menu_active : "";
  return (
    <div className={`${Styles.logoContainer} ${menuActiveClass}`}>
      {menuActive ? (
        <>
          <h1>MiniNotes</h1>
          <span>Tus notas rapidas</span>
        </>
      ) : (
        <h1>MN</h1>
      )}
    </div>
  );
}

export default Logo;
