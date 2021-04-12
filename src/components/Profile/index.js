import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import PersonalInfo from "./PersonalInfo";
import Plants from './Plants'
import { Main, Full, Info} from "./styles";
const Personal = (props) => {
  const { HomePlants, LikedPlants, user, auth } = props;  
  

  return (
    <>
      <Full>
        <Main>
         <Info >
          <PersonalInfo users={user}/>
         </Info>
         
          <Plants  LikedPlants={LikedPlants}  HomePlants={HomePlants} auth={auth}/>
         
        </Main>
      </Full>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    HomePlants: state.firestore.data.HomePlants,
    LikedPlants: state.firestore.data.LikedPlants,
    user: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "HomePlants",
    },
    {
      collection: "LikedPlants",
    }
  ])
)(Personal);
