import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteHome } from "../../../store/actions/plantsActions.js";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import Cards from "./Cards";
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

const HomePlant = ({ scrollTop }) => {
  const { auth } = useSelector((state) => state.firebase);
  const { HomePlants } = useSelector((state) => state.firestore.ordered);
  const [more, setMore] = useState(false);
  const [self, setSelf] = useState("");
  const [deleted, setDeleted] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async (item) => {
    dispatch(deleteHome(item));
    setDeleted(true)
  };

  useEffect(() => {
    setTimeout(() => {
      deleted ? window.location.reload() : setDeleted(false);
    }, 250);
  }, [deleted]);

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
            <Icon medium style={{ color: "#228B22" }}>
              home
            </Icon>
            <Title>HOME</Title>
          </TitleBox>
          {more ? <More setMore={setMore} self={self} /> : null}
          <HomeBox>
            {!HomePlants || HomePlants === null || HomePlants === undefined
              ? null
              : HomePlants.map((item, index) => {
                  return item.authID === auth.uid ? (
                    <Cards
                      handleClick={handleClick}
                      key={index}
                      HomePlants={HomePlants}
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
    HomePlants: state.firestore.data.HomePlants,
    user: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "HomePlants",
    },
  ])
)(HomePlant);
