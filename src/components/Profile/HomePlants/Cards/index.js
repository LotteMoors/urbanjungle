import React from "react";
import { Icon } from "react-materialize";
import {
  Card,
  Body,
  ImageBox,
  IconBox,
  Content,
  CardTitle,
  Img,
  Trash,
} from "../../../Plants/Card/styles";

const Cards = ({ item, setSelf, setMore , handleClick }) => {
  
  const replacer =
    "http://www.wiu.edu/student_services/housing/residence_halls/images/furniture/no-image-available.png";

  const handleSelf = () => {
    setSelf(item.self)
    setMore(true)
    window.scrollTo(0,0)
  };

 

  return (
    <>
      <Card >
        <Body className="card-body">
          <Content>
            <CardTitle>{item.name && item.name}</CardTitle>{" "}
          </Content>
          <IconBox>
            <Icon
              small
              style={{ cursor: "pointer" }}
              onClick={handleSelf}
            >
              more_horiz
            </Icon>
            <Trash
              src="https://i.ibb.co/CQrq55D/trashe.png"
              onClick={() => handleClick(item)}
            />
          </IconBox>
          <ImageBox>
            <Img
              src={
                !item.img || item.img.includes("floristic")
                  ? replacer
                  : item.img
              }
              alt=""
            />
          </ImageBox>{" "}
        </Body>
      </Card>
    </>
  );
};

export default Cards;
