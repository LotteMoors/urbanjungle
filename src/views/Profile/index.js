import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import NavBar from '../../components/NavBar'
import Personal from '../../components/Profile'

const Profile = () => {
  return (
    <>
    <NavBar />
    <Personal />        

    </>
  );
};


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    HomePlants: state.firestore.ordered.HomePlants,
    LikedPlants: state.firestore.ordered.LikedPlants,
    users: state.firestore.data.users
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
    },
    {
      collection: "users",
    }
  ])
)(Profile);