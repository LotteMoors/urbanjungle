import React,  { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from '../../components/NavBar';

class Home extends Component {
   render(){
       console.log(this.props)
    return (
        <div id="outer-container">
            <NavBar /> 
            
            <div id="welcomeBox">
            
            </div>
            
        </div>
    )}
}

const mapStateToProps = (state) => {
    return{
        projects: state.user.users
    }
}

export default connect(mapStateToProps)(Home);
