import React from "react";
import { useDispatch } from "react-redux";
import {
  addHome,
  deleteHome,
} from "../../../../store/actions/plantsActions.js";
import { Icon } from "react-materialize";

const HomeIcon = ({ home, item, query }) => {
  const dispatch = useDispatch();

  const handleClick = async (item) => {
    ((await home) && home[query]) !== undefined && home[query] !== null
      ? dispatch(deleteHome(item))
      : dispatch(addHome(item));
    console.log(home[query]);
  };

  const style =
    home !== undefined && home[query] !== undefined && home[query] !== null
      ? { color: "#2E8B57", cursor: "pointer" , userSelect:'none'}
      : { color: "black", cursor: "pointer" , userSelect:'none'};

  return (
    <>
      <Icon small style={style} onClick={() => handleClick(item)}>
        home
      </Icon>
    </>
  );
};

export default HomeIcon;
