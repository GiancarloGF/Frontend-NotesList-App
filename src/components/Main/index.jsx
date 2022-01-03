import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from './Header/index';
import Styles from './styles.module.css';
function Main() {
  return (
    <div className={Styles.main_container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
