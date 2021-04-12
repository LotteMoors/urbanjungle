import React  from "react";
import { useDispatch } from "react-redux";
import {
  addLiked,
  deleteLiked,
} from "../../../../store/actions/plantsActions.js";
import { Icon } from "react-materialize";

const LikeIcon = ({ liked, item, query }) => {
  const dispatch = useDispatch();

  const handleClick = async (item) => {
    (await liked && liked[query]) !== undefined && liked[query] !== null
      ? dispatch(deleteLiked(item))
      : dispatch(addLiked(item));   
  };

  const style = liked !== undefined &&  liked[query] !== undefined && liked[query] !== null ? { color: '#DC143C', cursor: 'pointer' } : { color: "black", cursor: 'pointer' }


  return (
    <>
      <Icon
        small
        style={style}
        onClick={() => handleClick(item)}
      >
        favorite
      </Icon>
    </>
  );
};

export default LikeIcon;
