import React, { useRef, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../store/actions/authActions.js";

let Register = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const [user, setUser] = useState(null);
  
  const { isLoggedIn } = useSelector((state) => state.auth);

  const password = useRef({});
  password.current = watch("password", "");

  const dispatch = useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    dispatch(signUp(user));
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
              className={errors.username ? "invalid" : null}
              ref={register({
                required: "Empty field",
                minLength: {
                  value: 6,
                  message: "Username must be at least 6 characters",
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
              className={errors.email ? "invalid" : null}
              ref={register({
                required: "Empty field",
                pattern: {
                  value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
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
              className={errors.password ? "invalid" : null}
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
              className={errors.password_repeat ? "invalid" : null}
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
      {isLoggedIn ? <Redirect to="/Home" /> : null}
    </div>
  );
};

export default Register;
