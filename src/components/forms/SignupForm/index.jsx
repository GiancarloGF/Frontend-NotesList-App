import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Styles from "./styles.module.css";
import { notificationSelector } from "../../../store/features/notification/notificationSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { setUserAction } from "../../../store/features/user/userSlice";
import Button from "../../Button";
import Notification from "../../Notification/index";
import InputText from "../../Inputs/InputText";
import InputEmail from "../../Inputs/InputEmail";
import InputPassword from "../../Inputs/InputPassword";
import * as Yup from "yup";

function SignupForm() {
  // const dispatch = useDispatch();
  // let navigate = useNavigate();
  // const currentNotification = useSelector(notificationSelector);

  const handleRegister = ({ userName, email, password }) => {
    // dispatch(setUserAction(email, password)).then(() => navigate("/dashboard"));
    console.log(userName, email, password);
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(10, "Debe tener menos de 10 caracteres")
        .min(5, "Debe tener al menos 5 caracteres")
        .required("Nombre de usuario requerido"),
      email: Yup.string().email("Correo Invalido").required("Correo Requerido"),
      password: Yup.string()
        .min(5, "Debe tener al menos 5 caracteres")
        .max(15, "Debe tener menos de 15 caracteres")
        .required("Contraseña requerida"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      handleRegister({
        userName: values.userName,
        email: values.email,
        password: values.password,
      });
      setSubmitting(false);
    },
  });

  return (
    <div className="container__form container--signup">
      <form
        action="#"
        className={Styles.form}
        onSubmit={formik.handleSubmit}
      >
        <h2 className={Styles.headerText}>Registro</h2>
        <div className={Styles.inputsContainer}>
          <InputText
            formik={formik}
            labelText="Nombre de Usuario"
            id="userName"
            placeholder="Jhon Doe"
          />
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
        
        <Button variant="primary" text="Registrarme" />
      </form>
    </div>
  );
}

export default SignupForm;
