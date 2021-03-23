import React from 'react';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";




import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Search from './views/Search'
import Community from './views/Community'
import Profile from './views/Profile'

function App(){ 


 
  return (
     <>
     
        <Router>
         
          <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Plants" component={Search} />
          <Route path="/Community" component={Community} />
          <Route path="/Profile" component={Profile} />
          </Switch>
        </Router>
      
    </>
  
  );
}

export default App;

