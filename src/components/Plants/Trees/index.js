import React, { useState, useEffect } from "react";
import Loader from "../../Loader";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Main, Card, Body, ImageBox, Content, Title, Side } from "../Plant/styles";

const Trees = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const URL = `/api/v1/plants?token=Fvppw0rWoJBQRNwj0bnOURGVvr7vzGTkAub8v7r3S8M&page=${page}&filter[ligneous_type]=tree`;
  const replacer =
    "http://www.wiu.edu/student_services/housing/residence_halls/images/furniture/no-image-available.png";

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1);
  };

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
    <div style={{margin:"0 auto", textAlign:"center", marginBottom:"4em"}}>
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
                  style={{ height: "15em", width: "100%", maxWidth: "15em" }}
                  src={!item.image_url ? replacer : item.image_url}
                  alt=""
                />
              </ImageBox>
            </Body>
          </Card>
        ))}
      </Main>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={59}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Trees;
