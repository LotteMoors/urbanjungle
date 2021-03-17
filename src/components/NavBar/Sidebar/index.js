import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./index.scss";

export const SideBar = () => {
  return (
    <Menu>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/Plants">
        Plants
      </Link>

      <Link className="link" to="/Profile">
        Profile
      </Link>

      <Link className="link" to="/Community">
        Community
      </Link>     
    </Menu>
  );
};
