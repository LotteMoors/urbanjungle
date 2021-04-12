import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Context } from "../index.js";
import Loader from "../../Loader";
import { Icon } from "react-materialize";
import {
  Card,
  Body,
  ImageBox,
  Content,
  CardTitle,
  IconBox,
  Img,
} from "./styles";
import LikeIcon from "./LikeIcon";
import HomeIcon from "./HomeIcon";
import MapIcons from "./MapIcons";

const Cards = ({ data }) => {
  const { updateSelf, updateImg } = useContext(Context);
  const [liked, setLiked] = useState(undefined);
  const [home, setHome] = useState(undefined);
  const { LikedPlants, HomePlants } = useSelector(
    (state) => state.firestore.data
  );
  const { uid } = useSelector((state) => state.firebase.auth);

  const replacer =
    "http://www.wiu.edu/student_services/housing/residence_halls/images/furniture/no-image-available.png";

  useEffect(() => {
    data ? setLiked(LikedPlants) : setLiked(undefined);
    data ? setHome(HomePlants) : setHome(undefined);
  }, [LikedPlants, HomePlants, data]);

  const handleSelf = (index) => {
    const newData = [...data];
    updateSelf(newData[index].links.self);
    window.scrollTo(0, 0);
    updateImg(true);
  };

  if (!data) {
    return <Loader />;
  }
  return (
    <>
      {data.map((item, index) =>
        item.common_name ? (
          <Card key={index}>
            <Body className="card-body">
              <Content>
                <CardTitle>{item.common_name}</CardTitle>{" "}
              </Content>

              <IconBox>
                <Icon
                  small
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelf(index)}
                >
                  more_horiz
                </Icon>
                <HomeIcon home={home} query={`${uid}+${item.id}`} item={item} />
                <LikeIcon
                  liked={liked}
                  query={`${uid}+${item.id}`}
                  item={item}
                />
              </IconBox>
              <MapIcons />
              <ImageBox>
                <Img
                  src={
                    !item.image_url || item.image_url.includes("floristic")
                      ? replacer
                      : item.image_url
                  }
                  alt=""
                />
              </ImageBox>
            </Body>
          </Card>
        ) : null
      )}
    </>
  );
};

export default Cards;
