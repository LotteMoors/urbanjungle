import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../../../store/actions/authActions";

import "../style.scss";

export const SignedIn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOut());   
  };

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }
  return (
    <Menu >
      <Link onClick={scrollToTop} className="link" to="/Home">
        <div>
        Home
        </div>
      </Link>
      <Link  onClick={scrollToTop} className="link" to="/Plants">
        <div>
        Plants
        </div>
      </Link>

      <Link  onClick={scrollToTop} className="link" to="/Profile">
        <div>Profile</div>
        
      </Link>

      <Link  onClick={scrollToTop} className="link" to="/Community">
        <div>Community</div>
      </Link>   

         <Link className="link" to="/Home" onClick={handleClick}>
        <div>Sign Out</div>
      </Link>  
    </Menu>
  );
};
