import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
import avatar_img from "../../../images/avatar01.svg";
function UserInfo() {
  const navigate = useNavigate();
  const color_theme=useSelector(state => state.colorTheme)
  const[userName, setUserName] = useState("");
  const[email, setEmail] =useState("");
  
  const uppFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    if (userName === "" && email === "") {
      const user = JSON.parse(window.localStorage.getItem("loggedNoteappUser"));
      if (user !== null) {
        setUserName(user.userName);
        setEmail(user.email);
      } else {
        navigate("/");
      }
    }
  }, []);

  return (
    <div className={`${Styles.userInfo_container} ${Styles[color_theme]}`}>
      <div className={Styles.avatar}>
        <img src={avatar_img} alt="" className={Styles.img} />
      </div>
      <div className={Styles.info}>
        <div>
          <span className={Styles.welcome}>Bienvenido, </span>  
          <span className={Styles.name}>{userName===""?"":uppFirstLetter(userName)+"!"}</span>
          <br />
        </div>
        <span className={Styles.email}>{email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
