import React from "react";
import { Link } from "react-router-dom";

import {  Nav, Logo, Title, HoverBox, Box, Bar } from "./styles.js";
import logo from "../img/leaf2.png";

export const Head = () => {
  return (
    <Nav>
      <Bar></Bar>
        <Logo>
          <img
            src={logo}
            style={{ width: "38px", height: "38px" }}
            alt="logo"
          />
          <Title>Urban Jungle</Title>
        </Logo>
        <Box>
          <Link className="link" to="/Login">
            <HoverBox>Sign In</HoverBox>
          </Link>
        </Box>
     
    </Nav>
  );
};
