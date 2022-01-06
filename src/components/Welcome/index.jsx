import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import "./styles.css";
import Button from "../Button";
import SignupForm from '../forms/SignupForm/index';
import SigninForm from '../forms/SigninForm/index';
function Welcome() {
  
  const [showSignIn, setShowSignIn] = useState(true);
  // const [toCleanSignin, setToCleanSignin] = useState(false);
  // const [toCleanSignup, setToCleanSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.localStorage.getItem("loggedNoteappUser")) {
      const local_user_data = JSON.parse(window.localStorage.getItem("loggedNoteappUser"));
      dispatch({ type: "USER/SET_USER", payload: local_user_data });
      navigate("/dashboard");
    }
  }, [dispatch, navigate]);


  const rightPanel_className = showSignIn ? "" : "right-panel-active";
  const onSignIn = () => {
    console.log("Sign In");
    // setToCleanSignin(true);
    // setToCleanSignup(false);
    setShowSignIn(true);
  };
  const onSignUp = () => {
    console.log("Sign Up");
    // setToCleanSignup(true);
    // setToCleanSignin(false);
    setShowSignIn(false);
  };
  return (
    <main id="welcome" className="welcome">
      <div className={`container ${rightPanel_className}`}>
        {/* <!--  Sign Up  --> */}
        <SignupForm showSignIn={showSignIn}/>
        {/* <!-- Sign In  --> */}
        <SigninForm showSignIn={showSignIn}/>
        {/* <!-- Overlay   --> */}
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--right">
              <Button
                variant="secondary"
                text="Registrame"
                handleClick={onSignUp}
              />
            </div>
            <div className="overlay__panel overlay--left">
              <Button
                variant="secondary"
                text="Ingresar"
                handleClick={onSignIn}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
