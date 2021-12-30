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
// import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function SigninForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const notification = useSelector(notificationSelector);

  //HandleEvent to validate login and save token from server each time we log in.
  const handleLogin = async ({ email, password }) => {
    try {
      // event.preventDefault();
      console.log("entre al try");
      const user = await loginService.login({ email, password });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      noteService.setToken(user.token);
      dispatch({ type: "USER/SET_USER", payload: user });
      dispatch({ type: "NOTIFICATION/LOGIN_SUCCESS" });
      setTimeout(() => {
        dispatch({ type: "NOTIFICATION/RESET" });
        navigate("/dashboard");
      }, 1500);
    } catch (exception) {
      // event.preventDefault();
      console.log("entre al catch");
      dispatch({ type: "NOTIFICATION/LOGIN_ERROR" });
      setTimeout(() => dispatch({ type: "NOTIFICATION/RESET" }), 3000);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(15, "Must be 10 characters or less")
          .required("Required"),
      })  }
      onSubmit={(values, { setSubmitting }) => {
        handleLogin(values);
        setSubmitting(false);
      }}
    >
        <div className="container__form container--signin">
          {/**Mensajecustomizado */}
          {notification && <Notification notification={notification} />}
          <Form
            // action="#"
            // className="form"
            // id="form1"
            // onSubmit={formik.handleSubmit}
          >
            <h2 className="form__title">Ingreso</h2>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Correo"
              className={Styles.input}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            {/* {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null} */}
             <ErrorMessage name="email" component="span" className={Styles.ErrorMessage}/>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              className={Styles.input}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.password}
            />
            {/* {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null} */}
             <ErrorMessage name="password"  component="span" className={Styles.ErrorMessage}/>
            <Button variation="primary" text="Ingresar" />
          </Form>
        </div>
    </Formik>
  );
}

export default SigninForm;
