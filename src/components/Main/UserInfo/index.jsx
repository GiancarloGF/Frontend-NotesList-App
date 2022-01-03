import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Styles from "./styles.module.css";
import avatar_img from "../../../images/avatar01.svg";
function UserInfo() {
  const navigate = useNavigate();
  const color_theme=useSelector(state => state.colorTheme)
  const[name, setName] = useState("");
  const[email, setEmail] =useState("");
  const uppFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    if (name === "" && email === "") {
      const user = JSON.parse(window.localStorage.getItem("loggedNoteappUser"));
      if (user !== null) {
        setName(user.name);
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
          <span className={Styles.name}>{name===""?"":uppFirstLetter(name)+"!"}</span>
          <br />
        </div>
        <span className={Styles.email}>{email}</span>
      </div>
    </div>
  );
}

export default UserInfo;
