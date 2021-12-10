import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import "./styles.css";
import Button from "../buttons/BtnLogInOut/index";
import SignupForm from '../forms/SignupForm/index';
import SigninForm from '../forms/SigninForm/index';
function Welcome() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("loggedNoteappUser")) {
      const local_user_data = JSON.parse(window.localStorage.getItem("loggedNoteappUser"));
      dispatch({ type: "USER/SET_USER", payload: local_user_data });
      navigate("/dashboard");
    }
  }, []);


  const [showSignIn, setShowSignIn] = useState(true);
  const rightPanel_className = showSignIn ? "" : "right-panel-active";
  const onSignIn = () => {
    console.log("Sign In");
    setShowSignIn(true);
  };
  const onSignUp = () => {
    console.log("Sign Up");
    setShowSignIn(false);
  };
  return (
    <main id="welcome" className="welcome">
      <div className={`container ${rightPanel_className}`}>
        {/* <!--  Sign Up  --> */}
        <SignupForm />
        {/* <!-- Sign In  --> */}
        <SigninForm />
        {/* <!-- Overlay   --> */}
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--right">
              <Button
                variation="secondary"
                text="Registrame"
                onClick={onSignUp}
              />
            </div>
            <div className="overlay__panel overlay--left">
              <Button
                variation="secondary"
                text="Ingresar"
                onClick={onSignIn}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
