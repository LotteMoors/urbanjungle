import React  from 'react'
import { useSelector } from 'react-redux'

import NavBar from '../../components/NavBar';


const Home = ()=>{
    
    const {ms} = useSelector(state => state.message)
   
    return (
        <div id="outer-container">
            <NavBar /> 
            
            <div id="welcomeBox">
            {console.log(ms)}
            </div>
            
        </div>
    )
}

export default Home;
