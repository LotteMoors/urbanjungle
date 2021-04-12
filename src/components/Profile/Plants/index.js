import React from "react";
import { Link } from 'react-router-dom'
import {  PlantBox , Button, ButtonBox} from "../styles";
import { Icon } from 'react-materialize'
const Plants = () => {  

  return (
    <>    
       <PlantBox>
         <ButtonBox>
        <Link to="/Profile/Home" onClick={()=> window.scrollTo(0,0)}><Button><Icon style={{margin:' 0.2em auto', color: '#2E8B57'}} medium>home</Icon>HOME</Button></Link> 
        <Link to="/Profile/Liked" onClick={()=> window.scrollTo(0,0)} ><Button><Icon style={{margin:'0.2em auto', color:'#DC143C'}} medium>favorite</Icon>LIKED</Button></Link>
         </ButtonBox>
       </PlantBox>  
     
      
  </>
  );
};

export default Plants