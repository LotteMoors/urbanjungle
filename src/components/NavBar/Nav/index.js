import React from "react";
// import { Link  } from "react-router-dom";
// import { SignedOutLink } from "./SignedOut";
// import { SignedInLink } from "./SignedIn";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Nav, Logo, Title, Img } from "./styles.js";
import logo from "../img/leaf2.png";

const Head = (props) => {
  return (
    <Nav>
      <Link to="/Home">
        <Logo>
          <Img src={logo} alt="logo" />
          <Title>Urban Jungle</Title>
        </Logo>
      </Link>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Head);
