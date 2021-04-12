import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const MapIcons = () => {
  return <div></div>;
};


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    HomePlants: state.firestore.data.HomePlants,
    LikedPlants: state.firestore.data.LikedPlants,
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
  ])
)(MapIcons);
