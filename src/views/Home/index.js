import React from "react";

import { connect } from 'react-redux'
import NavBar from "../../components/NavBar";
import { Full, Box } from "../../components/Homepage";

const Home = (props) => {
    const { auth } = props

    const name = auth.username
  

  return (
      
    <div>
      <NavBar />
      <Full>
        <Box>
            <h1>
                Hello {name}
            </h1>
        </Box>
      </Full>
    </div>
  );
};

const mapStateToProps = (state) => {
    
    return {
      auth: state.firebase.auth,
    };
  };

export default connect(mapStateToProps)(Home);
