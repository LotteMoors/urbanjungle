import React from "react";

import { connect } from 'react-redux'
import NavBar from "../../components/NavBar";
import { Full, Box } from "../../components/Homepage";

const Home = (props) => {
    const { profile  } = props

    const name = profile.username
  

  return (
      
    <div>
      <NavBar />
      <Full>
        <Box>
            <h1>
                Welcome               
                {name && ' ' + name}
            </h1>
        </Box>
      </Full>
    </div>
  );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    };
  };

export default connect(mapStateToProps)(Home);
