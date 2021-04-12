import React from "react";

import Log from '../../components/signIn/login'
import NavBar from '../../components/NavBar'
import Container from '../../components/Container'

const Login = () => {

  return (
    <div style={{background:"#FFDAB9", width:'100%'}}>
    <NavBar />
    <Container.FULL_SCREEN>
    <Log />
    
    </Container.FULL_SCREEN>

    </div>
  );
};

export default Login;