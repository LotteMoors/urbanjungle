import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = ({ submitForm }) => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="regContainer">
      <form className="regForm " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form_title">Create Account</h1>
        <div className="box">
          <div className="input-field col s12">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              ref={register({
                required: "Empty field",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters.",
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
              ref={register({
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.password_repeat && (
              <span>{errors.password_repeat.message}</span>
            )}
          </div>
        </div>
        <button className="loginBtn" type="submit">
          Continue
        </button>
        <div className="form_text ">
          Already have an account?{" "}
          <Link className="link" to="/Login">
            Log in.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
