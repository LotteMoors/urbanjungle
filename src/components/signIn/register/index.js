import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import {  useDispatch } from "react-redux";
// import { signIn } from "../../../store/actions/authActions.js";

let Register = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:""
  })

  const password = useRef({});
  password.current = watch("password", "");

  

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setUser(prevState => ({ 
      ...prevState,
      [name]: value
    }))
  }

  const onSubmit = async () => {
    console.log(user);   
  };



  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className="form_title">Create Account</h1>
        <div className="box">
          <div className="input-field col s12">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className={errors.username? "invalid" : null}
              ref={register({
                required: "Empty field",
                minLength: {
                  value: 5,
                  message: "Username must be at least 5 characters",
                },
              })}
            />

            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div className="input-field col s12">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className={errors.email? "invalid" : null}
              ref={register({
                required: "Empty field",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
            />

            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="input-field col s12">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className={errors.password? "invalid" : null}
              ref={register({
                required: "Empty field",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="input-field col s12">
            <label htmlFor="passConfirm">Confirm Password</label>
            <input
              type="password"
              name="password_repeat"
              className={errors.password_repeat? "invalid" : null}
              ref={register({
                validate: (value) =>
                  value === password.current || "Passwords don't match",
              })}
            />
            {errors.password_repeat && (
              <span>{errors.password_repeat.message}</span>
            )}
          </div>
        </div>
        <button className="btn" type="submit">
          Continue
        </button>
        <div className="form_text ">
          Already have an account?{" "}
          <Link className="form_link" to="/Login">
            Log in.
          </Link>
        </div>
      </form>
    </div>
  );
};



export default Register;
