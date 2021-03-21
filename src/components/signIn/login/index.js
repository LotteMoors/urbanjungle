import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import "../style.scss";

const LogIn = () => {
  const { handleSubmit } = useForm({});
  
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form_title">Login</h1>
        <div className="box">

        <div className="input-field col s12">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div className="input-field col s12">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="passLogin"
            className="form_input"
            id="pass"
          />

          <div className="form__input-error-message"></div>
        </div>
        <button className="btn" type="submit">
          Continue
        </button>
        </div>
        <div className="form_text ">
          Don't have an account?{" "}
          <Link className="form_link" to="/Register">
            Sign up.
          </Link>
        </div>
        <div className=" form_text">
          <a href="/" className="forgot_pass">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
