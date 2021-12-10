import React, { useEffect, useState } from "react";
import { Outlet , useNavigate} from "react-router-dom";
import Styles from "./styles.module.css";
import Menu from "../Menu/index";
import Logo from "../Logo/index";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Search from "../Search/index";
import UserInfo from "../UserInfo/index";

function Dashboard() {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const menu_active_class = menuActive ? Styles.menu_active : "";

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("loggedNoteappUser"));
    if (user === null) {
      navigate("/");
    }
  }, []);

  return (
    <main className={Styles.container}>
      <div className={`${Styles.leftContainer} ${menu_active_class}`}>
        {menuActive ? (
          <AiOutlineDoubleLeft
            className={Styles.iconToggle}
            onClick={() => setMenuActive(false)}
          />
        ) : (
          <AiOutlineDoubleRight
            className={Styles.iconToggle}
            onClick={() => setMenuActive(true)}
          />
        )}
        <Logo menuActive={menuActive} />
        <Menu menuActive={menuActive} />
      </div>
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
