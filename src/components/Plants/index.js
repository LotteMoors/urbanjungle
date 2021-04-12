import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Icon } from "react-materialize";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import {
  Full,
  PlantBox,
  SearchContainer,
  SearchBox,
  Input,
  Header,
  SearchImg,
  Button,
  List,
  Category,
  Title,
  TitleBox,
} from "./styles";

import ScrollTop from "../ScrollTop";
import All from "./All";
import Trees from "./Trees";
import Edible from "./Edible";
import Succulents from "./Succulents";
import Flowers from "./Flowers";
import Vegetables from "./Vegetables";
import Search from "./Search";
import More from "./More";

export const Context = React.createContext();

const Plants = ({ scrollTop }) => {
  const [query, setQuery] = useState("");
  const [self, setSelf] = useState(null);
  const [img, setImg] = useState(true);
  const [click, setClick] = useState("All Plants");

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSelf("");
  };

  const handleClick = (value) => {
    setQuery("");
    setSelf("");
    setClick(value);
  };

  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
      inDuration: 500,
      outDuration: 225,
      coverTrigger: false,
    });
  });

  return (
    <Full>
      <Context.Provider
        value={{
          self,
          updateSelf: (self) => setSelf(self),
          img,
          updateImg: (img) => setImg(img),
        }}
      >
        <ScrollTop onClick={scrollTop} />
        <SearchContainer>
          <SearchBox>
            <SearchImg src="https://i.ibb.co/9YGzM7z/search.jpg" alt="j" />
            <Input
              type="text"
              className={"search-bar"}
              placeholder="Search all plants"
              onChange={handleChange}
              value={query}
            />
          </SearchBox>
        </SearchContainer>
        {self && <More setSelf={setSelf} />}

        <PlantBox>
          <div style={{ width: "100%" }}>
            {query !== "" ? <Search query={query} /> : null}
          </div>
          <Header>
            <TitleBox>
              <Title>{click}</Title>
            </TitleBox>
            <div>
              <Button
                className="dropdown-trigger waves-effect waves-dark "
                data-target="dropdown1"
              >
                <Icon small style={{ margin: " 5px 0 " }}>
                  arrow_drop_down
                </Icon>{" "}
                CATEGORIES
              </Button>
            </div>
          </Header>
          <List id="dropdown1" className="dropdown-content">
            <li>
              <Category onClick={() => handleClick("All Plants")}>All</Category>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              {" "}
              <Category onClick={() => handleClick("Trees")}>Trees</Category>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Category onClick={() => handleClick("Flowers")}>
                Flowers
              </Category>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              {" "}
              <Category onClick={() => handleClick("Succulents")}>
                Succulents
              </Category>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              {" "}
              <Category onClick={() => handleClick("Vegetables")}>
                Vegetables
              </Category>
            </li>
            <li className="divider" tabIndex="-1"></li>
            <li>
              <Category onClick={() => handleClick("Edible")}>Edible</Category>
            </li>
          </List>
          <div style={{ width: "100%", margin: '1em auto', display:'flex', alignContent:'center', justifyContent:'space-between'}}>
            {click === "All Plants" ? (
              <All />
            ) : click === "Trees" ? (
              <Trees />
            ) : click === "Edible" ? (
              <Edible />
            ) : click === "Succulents" ? (
              <Succulents />
            ) : click === "Flowers" ? (
              <Flowers />
            ) : click === "Vegetables" ? (
              <Vegetables />
            ) : (
              <All />
            )}
          </div>
        </PlantBox>
      </Context.Provider>
    </Full>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    HomePlants: state.firestore.data.HomePlants,
    LikedPlants: state.firestore.data.LikedPlants,
    user: state.firebase.profile,
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
)(Plants);
