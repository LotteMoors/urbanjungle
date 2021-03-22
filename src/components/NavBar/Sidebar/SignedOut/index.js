import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../index.scss";

export const SignedOut = () => {
  return (
    <Menu>
      <Link className="link" to="/Home">
        Home
      </Link>
      <Link className="link" to="/Plants">
        Plants
      </Link>
          
    </Menu>
  );
};