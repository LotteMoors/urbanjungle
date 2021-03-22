import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../../store/actions/authActions'
import "../style.scss";

const LogIn = () => {
  const[data, setData] = useState({
    username:"",
    password:""  
  })
  const { handleSubmit } = useForm({});
  const { user: authError } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setData(prevState => ({ 
      ...prevState,
      [name]: value
    }))
  }

  if (authError) {
    return <Redirect to="/Home" />;
  }

  const onSubmit = async () => {    
    console.log(data);
    dispatch(signIn(data))
  };
  return (


    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form_title">Login</h1>
        <div className="box">
          <div className="input-field col s12">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              name="username" 
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
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
  )
}


export default LogIn;
