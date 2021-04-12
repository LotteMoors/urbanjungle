import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../../components/NavBar";
import { Full, Box, ButtonBox, Button, Trefle, Title } from "./styles";

const Home = (props) => {
  const { profile, auth } = props;

  const name = profile.username;
  const uid = auth.uid;

  return (
    <div>
      <NavBar />
      <Full>
        <Box>
          <Title>
            Welcome
            {name && " " + name}
          </Title>
          {uid ? (
            <ButtonBox>
              <Button><Link className="link-home" to="/Plants">PLANTS</Link></Button>
              <Button><Link className="link-home"  to="/Community">COMMUNITY</Link></Button>
              <Button><Link className="link-home" to="/Profile">PROFILE</Link></Button>
            </ButtonBox>
          ) : (
            <ButtonBox>
             <Button> <Link className="link-home" to="/Login">LOGIN</Link></Button>
              <Button><Link className="link-home" to="/Register">REGISTER</Link></Button>
            </ButtonBox>
          )}

          <Trefle>
            Special thanks to{" "}
            <a href="https://trefle.io/" rel="noreferrer" target="_blank">
              Trefle
            </a>
            <br />
            The information used on this platform <br /> originates from their
            API and documentation.{" "}
          </Trefle>
        </Box>
      </Full>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Home);
