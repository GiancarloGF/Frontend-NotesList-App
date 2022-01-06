import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styles from "./styles.module.css";
import { notificationSelector } from "../../../store/features/notification/notificationSlice";
import { useFormik } from "formik";
import { setUserAction } from "../../../store/features/user/userSlice";
import Button from "../../Button";
import Notification from "../../Notification/index";
import InputEmail from "../../Inputs/InputEmail";
import InputPassword from "../../Inputs/InputPassword";

import * as Yup from "yup";

function SigninForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentNotification = useSelector(notificationSelector);

  const handleLogin = ({ email, password }) => {
    dispatch(setUserAction(email, password)).then(() => navigate("/dashboard"));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Correo Invalido").required("Correo Requerido"),
      password: Yup.string()
        .max(15, "Debe tener menos de 15 caracteres")
        .required("Contraseña requerida"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      handleLogin({ email: values.email, password: values.password });
      setSubmitting(false);
    },
  });
  return (
    <div className="container__form container--signin">
      {currentNotification.message !== null && (
        <Notification notification={currentNotification} />
      )}
      <form className={Styles.form} onSubmit={formik.handleSubmit}>
        <h2 className={Styles.headerText}>Ingreso</h2>
        <div className={Styles.inputsContainer}>
        <InputEmail
            formik={formik}
            labelText="Correo"
            id="email"
            placeholder="jhonDoe@email.com"
          />
          <InputPassword
            formik={formik}
            labelText="Contraseña"
            id="password"
            placeholder="123456"
          />
          
        </div>
        <a href="#" className={Styles.link}>
          ¿Olvidaste tu contraseña?{" "}
        </a>
        <Button variant="primary" text="Ingresar" />
      </form>
    </div>
  );
}

export default SigninForm;
