import React, { useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import Cards from "./Cards";
import { useDispatch } from "react-redux";
import {
  deleteLiked
} from "../../../store/actions/plantsActions.js";
import ScrollTop from "../../ScrollTop";
import {
  HomeBox,
  HomeContainer,
  Title,
  TitleBox,
  GoBackBtn,
  Full,
  Main,
} from "../styles";
import More from "./More";

const LikedPlant = ({ scrollTop }) => {
  const { auth } = useSelector((state) => state.firebase);
  const { LikedPlants } = useSelector((state) => state.firestore.ordered);
  const [more, setMore] = useState(false);
  const [self, setSelf] = useState("");
 
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(deleteLiked(item));
  };
  

  // if (!HomePlants) {
  //   return <p>No plants yet</p>;
  // }
  return (
    <Full>
      <NavBar />
      <Main>
        <Link to="/Profile">
          <GoBackBtn>
            〈 <p> GO BACK</p>
          </GoBackBtn>
        </Link>
        <HomeContainer>
          <TitleBox>
             
            <Icon medium style={{ color: "#DC143C" }}>
              favorite
            </Icon>
            <Title>Liked</Title>
          </TitleBox>
          {more ? <More setMore={setMore} self={self} /> : null}
          <HomeBox>
            {!LikedPlants || LikedPlants === null || LikedPlants === undefined
              ? null
              : LikedPlants.map((item, index) => {
                  return item.authID === auth.uid ? (
                    <Cards
                      handleClick={handleClick}
                      key={index}
                      LikedPlants={LikedPlants}
                      query={`${auth.uid}+${item.id}`}
                      item={item}
                      auth={auth}
                      setSelf={setSelf}
                      setMore={setMore}
                    />
                  ) : null;
                })}
          </HomeBox>
        </HomeContainer>
      </Main>
      <ScrollTop onClick={scrollTop} />
    </Full>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    LikedPlants: state.firestore.data.LikedPlants,
    user: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "LikedPlants",
    },
  ])
)(LikedPlant);
