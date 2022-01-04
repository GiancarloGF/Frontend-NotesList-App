import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styles from "./styles.module.css";
import Menu from "../Menu/index";
import Main from "../Main/index.jsx";
import noteService from "../../services/notesService";


function Dashboard() {
  const isMenuActive = useSelector((state) => state.isMenuActive);
  const color_theme = useSelector((state) => state.colorTheme);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON=window.localStorage.getItem('loggedNoteappUser');
    if(loggedUserJSON){
      const user=JSON.parse(loggedUserJSON);
      // setUser(user);//actualizamos nuestro estado user.
      noteService.setToken(user.token);//Guardo el token para luego mandarlo al servidor cuando se crea una nueva nota.
    }else{
      navigate('/');
    }
  },[])

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
