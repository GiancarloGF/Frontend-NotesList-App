import React, { useEffect} from "react";
import { useSelector } from "react-redux";
import { Outlet , useNavigate} from "react-router-dom";
import Styles from "./styles.module.css";
import Search from "./Search/index";
import UserInfo from "./UserInfo/index";
import Menu from './Menu/index';
function Dashboard() {
  const isMenuActive = useSelector(state => state.isMenuActive);
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("loggedNoteappUser"));
    if (user === null) {
      navigate("/");
    }
  }, []);

  return (
    <main className={`${Styles.container} ${isMenuActive && Styles.menu_active}`}>
      <Menu/>
      <div className={Styles.rightContainer}>
        <div className={Styles.top}>
          <UserInfo />
          <Search />
        </div>
        <Outlet />
      </div>
    </main>
  );
}

export default Dashboard;
