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
    <Menu disableAutoFocus >
      <Link  onClick={scrollToTop} className="link" to="/Home">        
        Home        
      </Link>
      <Link  onClick={scrollToTop} className="link" to="/Plants">
        
        Plants
        
      </Link>

      <Link  onClick={scrollToTop} className="link" to="/Profile">
       Profile
        
      </Link>

      <Link  onClick={scrollToTop} className="link" to="/Community">
        Community
      </Link>   

         <Link className="link" to="/Home" onClick={handleClick}>
        Sign Out
      </Link>  
    </Menu>
  );
};
