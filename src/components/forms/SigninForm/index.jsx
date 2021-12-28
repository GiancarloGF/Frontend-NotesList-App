import React, { useEffect, useState } from "react";
import Button from "../../buttons/BtnLogInOut/index";
import Styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginService from "../../../services/loginService";
import noteService from "../../../services/notesService";
import Notification from "../../Notification/index";
// import {userSelector} from '../../../store/features/user/userSlice';
import { notificationSelector } from "../../../store/features/notification/notificationSlice";

function SigninForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notification = useSelector(notificationSelector);
  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);
  
  //HandleEvent to validate login and save token from server each time we log in.
  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const user = await loginService.login({ email, password });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      noteService.setToken(user.token);
      dispatch({ type: "USER/SET_USER", payload: user });
      dispatch({ type: "NOTIFICATION/LOGIN_SUCCESS" });
      setEmail("");
      setPassword("");
      setTimeout(() => {
        dispatch({ type: "NOTIFICATION/RESET" });
        navigate("/dashboard");
      }, 1500);
    } catch (exception) {
      event.preventDefault();
      dispatch({ type: "NOTIFICATION/LOGIN_ERROR" });
      setTimeout(() => dispatch({ type: "NOTIFICATION/RESET" }), 3000);
    }
  };
  
  return (
    <div className="container__form container--signin">
      {/**Mensajecustomizado */}
      {notification && <Notification notification={notification} />}
      <form action="#" className="form" id="form1" onSubmit={handleLogin}>
        <h2 className="form__title">Ingreso</h2>
        <input
          type="email"
          placeholder="Correo"
          onChange={handleEmail}
          value={email}
          className={Styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handlePassword}
          value={password}
          className={Styles.input}
        />
        <Button variation="primary" text="Ingresar" />
      </form>
    </div>
  );
}

export default SigninForm;
