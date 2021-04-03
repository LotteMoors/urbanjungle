import React, { useState, useEffect } from "react";
import Loader from '../../Loader'
import axios from "axios";
import { Main, Card, Body, ImageBox, Content, Title, Side } from "./styles";

const Plant = ({page}) => {
  const [data, setData] = useState(null);

  const URL =
    `/api/v1/plants?token=Fvppw0rWoJBQRNwj0bnOURGVvr7vzGTkAub8v7r3S8M&page=${page}`;
  const replacer = "http://www.wiu.edu/student_services/housing/residence_halls/images/furniture/no-image-available.png"

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        widthCredentials: true,
      });

      setData(result.data.data);
    };

    fetchData();
  }, [URL]);

  if (!data) {
    return <Loader />;
  }
  return (
    <Main>
      {console.log(data)}

      {data.map((item, index) => (
        <Card key={index}>
          <Body className="card-body">
            <Content>
              <Title>{item.common_name}</Title>
              <Side>{item.family_common_name}</Side>
            </Content>
            <ImageBox>
              <img
                style={{ height: "20em",width:"100%", maxWidth: "20em" }}
                src={!item.image_url ? replacer : item.image_url }
                alt=""
              />
            </ImageBox>
          </Body>
        </Card>
      ))}
    </Main>
  );
};

export default Plant;
