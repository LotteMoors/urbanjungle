import React from 'react';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Search from './views/Search'
import Community from './views/Community'
import Profile from './views/Profile'
import HomePlants from './components/Profile/HomePlants'
import LikedPlants from './components/Profile/LikedPlants'

function App(){ 
 
  return (
     <>     
        <Router>
          <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Plants" exact component={Search} />
          <Route path="/Community" exact component={Community} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Profile/Liked" exact component={LikedPlants} />
          <Route path="/Profile/Home" exact component={HomePlants} />
          </Switch>
        </Router>
    </>
  
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    HomePlants: state.firestore.ordered.HomePlants,
    LikedPlants: state.firestore.ordered.LikedPlants,
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
)(App);

