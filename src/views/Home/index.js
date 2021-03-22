import React  from 'react'
import { useSelector } from 'react-redux'

import NavBar from '../../components/NavBar';


const Home = ()=>{
    
    const {ms} = useSelector(state => state.messages)
   
    return (
        <div id="outer-container">
            <NavBar /> 
            
            <div id="welcomeBox">
            {ms.title}
            </div>
            
        </div>
    )
}

export default Home;
