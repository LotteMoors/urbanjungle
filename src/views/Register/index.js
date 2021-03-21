import React from "react";

import Reg from "../../components/signIn/register";
import NavBar from "../../components/NavBar";
import Container from '../../components/Container';

const Register = () => {
  return (
    <div style={{ background: "#FFDAB9" }}>
      <NavBar />
      <Container.FULL_SCREEN>
      <Reg />
      </Container.FULL_SCREEN>
    </div>
  );
};

export default Register;
