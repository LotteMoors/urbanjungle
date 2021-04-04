import React, { useState, useEffect } from "react";
import Loader from "../../Loader";
import axios from "axios";
import {
  Main,
  Card,
  Body,
  ImageBox,
  Content,
  Title,
  Side,
} from "../Plant/styles";

const Search = ({ query }) => {
  const [data, setData] = useState(null);

  const URL = `/api/v1/plants/search?token=${process.env.REACT_APP_TREFLE_TOKEN}&q=${query}`;
  const replacer =
    "http://www.wiu.edu/student_services/housing/residence_halls/images/furniture/no-image-available.png";

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
    <div style={{ margin: "0 auto", textAlign: "center", marginBottom: "4em" }}>
      <Main>
        {console.log(data)}

        {data.map((item, index) => (
          <Card key={index}>
            <Body className="card-body">
              <Content>
                <Title>{item.common_name}</Title>
                <Side>
                  {item.family_common_name === "Trefle family"
                    ? null
                    : item.family_common_name}
                </Side>
              </Content>
              <ImageBox>
                <img
                  style={{ height: "15em", width: "100%", maxWidth: "15em" }}
                  src={!item.image_url ? replacer : item.image_url}
                  alt=""
                />
              </ImageBox>
            </Body>
          </Card>
        ))}
      </Main>
    </div>
  );
};

export default Search;
