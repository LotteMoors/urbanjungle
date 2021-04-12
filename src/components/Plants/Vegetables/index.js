import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Main } from "../styles";
import Loader from "../../Loader";
import Card from '../Card'

const Vegetables = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const URL = `/api/v1/plants?token=${process.env.REACT_APP_TREFLE_TOKEN}&page=${page}&filter[vegetable]=true`;

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
    <div style={{ margin: "0 auto", textAlign: "center", marginBottom: "6em" }}>
      <Main>
      <Card data={data} />
      </Main>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={8}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Vegetables;