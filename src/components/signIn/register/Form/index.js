import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Username} from './Username'

export const Form = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        passConfirm: ''
      });

      const handleChange = ({ target }) => {
        const { name, value } = target;
        setValues((prev) => ({
          ...prev,
          [name]: [value]
        }));
        console.log(name, value);
      };
    

    return (
        <div>
            <h1>Create Account</h1>
            <div className="regForm "  >
        <h1 className="form_title">Create Account</h1>
        
          <Username            
            name="username"           
            value = {values.username}
            onChange = {handleChange}
          />
         
        <button className="loginBtn" type="submit" >
          Continue
        </button>
        <div className="form_text ">
          Already have an account?{" "}
        
            <Link className="link" to="/Login">
              Log in.
            </Link>            
          
        </div>
      </div>
        </div>
    )
}
