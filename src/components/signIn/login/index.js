import React from "react";
import { Link } from "react-router-dom";

import "../style.scss";

const LogIn = () => {
  return (
    <div className="loginContainer">
      <form className="logForm ">
        <h1 className="form_title">Login</h1>
        <div className="form__message form__message--error"></div>
        <div className="box">
        <div className="input-field col s12">
          <input
            type="text"
            name="userLogin"
            className="form_input"
            id="username"            
          />
          <label htmlFor="username">Username or email</label>
          <div className="form__input-error-message"></div>
        </div>
        <div className="input-field col s12">          
          <input
            type="password"
            name="passLogin"
            className="form_input"
            id="pass"            
          />
          <label htmlFor="pass">Password</label>
          <div className="form__input-error-message"></div>
        </div>
        </div>
        <button className="loginBtn" type="submit">
          Continue
        </button>
        <div className="form_text ">
          Don't have an account?{" "}
          <Link className="link" to="/Register">
            Sign up.
          </Link>
        </div>
        <div className=" form_text">
          <a href="/" className="link_forgotPass">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
