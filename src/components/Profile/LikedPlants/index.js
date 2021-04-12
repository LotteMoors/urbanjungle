import React from "react";
import {  useSelector } from "react-redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import ScrollTop from '../../ScrollTop'
import NavBar from "../../NavBar";
import Cards from "./Cards";
import { HomeBox, GoBackBtn, LikedContainer, Full, Main, Title, TitleBox } from "../styles";

const LikedPlants = ({scrollTop}) => {
  const { LikedPlants } = useSelector((state) => state.firestore.ordered);
  const { auth } = useSelector((state) => state.firebase);

  
  return (
    <Full>
      <NavBar />
      <Main>
      <Link to="/Profile">
          <GoBackBtn>
            〈 <p> GO BACK</p>
          </GoBackBtn>
        </Link>
        <LikedContainer>
          <TitleBox>
            <Icon medium style={{color:'#DC143C'}}>favorite</Icon>
            <Title>LIKED</Title>
          </TitleBox>
          <HomeBox>
            {!LikedPlants ? null : 
            LikedPlants === undefined || LikedPlants === null 
              ? null
              : LikedPlants.map((item, index) => {
                  return item.authID === auth.uid ? (
                    <Cards key={index} item={item} />
                  ) : null;
                })}
                
          </HomeBox>
        </LikedContainer>
      </Main>
      <ScrollTop onClick={scrollTop}/>   
    </Full>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    LikedPlants: state.firestore.data.LikedPlants,
    user: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
   
    {
      collection: "LikedPlants",
    }
  ])
)(LikedPlants);
