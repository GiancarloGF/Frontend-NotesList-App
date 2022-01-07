import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
import avatar_img from "../../../images/avatar01.svg";
function UserInfo() {
  const colorTheme = useSelector((state) => state.colorTheme);
  let user = useSelector((state) => state.user);

  const uppFirstLetter = (userName) => {
    if (userName) {
      return userName.charAt(0).toUpperCase() + userName.slice(1);
    }
  };

  return (
    <div className={`${Styles.userInfo_container} ${Styles[colorTheme]}`}>
      <div className={Styles.avatar}>
        <img src={avatar_img} alt="" className={Styles.img} />
      </div>
      <div className={Styles.info}>
        <div>
          <span className={Styles.welcome}>Bienvenido, </span>
          <span className={Styles.name}>
            {user.userName ? uppFirstLetter(user.userName) + "!" : ""}
          </span>
          <br />
        </div>
        <span className={Styles.email}>{user.email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
