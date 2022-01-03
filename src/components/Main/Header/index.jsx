import React from "react";
import Styles from './styles.module.css';
import UserInfo from "../UserInfo/index";
// import { Outlet, useNavigate } from "react-router-dom";
import ThemeColorIcon from '../ThemeColorIcon/index';
function Header() {
  return (
    <div className={Styles.header_container}>
      <UserInfo />
      <ThemeColorIcon/>
    </div>
  );
}

export default Header;
