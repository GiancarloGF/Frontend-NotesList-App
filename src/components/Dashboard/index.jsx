import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styles from "./styles.module.css";
import Menu from "../Menu/index";
import Main from "../Main/index.jsx";

function Dashboard() {
  const isMenuActive = useSelector((state) => state.isMenuActive);
  const color_theme = useSelector((state) => state.colorTheme);
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("loggedNoteappUser"));
    if (user === null) {
      navigate("/");
    }
  }, []);

  return (
    <main
      className={`${Styles.dashboard_container} ${
        isMenuActive && Styles.menu_active
      } ${Styles[color_theme]}`}
    >
      <Menu />
      <Main />
    </main>
  );
}

export default Dashboard;
