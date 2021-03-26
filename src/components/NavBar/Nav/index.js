import React from "react";
import { SignedOutLink } from "./SignedOut";
import { SignedInLink } from "./SignedIn";
import { connect } from "react-redux";
import { Nav, Logo, Title, Bar } from "./styles.js";
import logo from "../img/leaf2.png";

const Head = (props) => {
  const { auth } = props;

  const links = auth.uid ? <SignedInLink /> : <SignedOutLink />;

  return (
    <Nav>
      <Bar></Bar>
      <Logo>
        <img src={logo} style={{ width: "38px", height: "38px" }} alt="logo" />
        <Title>Urban Jungle</Title>
      </Logo>

      {links}
    </Nav>
  );
};

const mapStateToProps = (state) => { 
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Head);
