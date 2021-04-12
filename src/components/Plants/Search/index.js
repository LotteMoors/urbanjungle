import React, { useState, useEffect } from "react";
import axios from "axios";
import { NoResults } from "./404";
import { Main, SearchTitle } from "../styles";
import Card from "../Card";

const Search = ({ query }) => {
  const [data, setData] = useState(null);
  const [meta, setMeta] = useState(1);
  

  const URL = `/api/v1/plants/search?token=${process.env.REACT_APP_TREFLE_TOKEN}&q=${query}`;

  useEffect(
    () => {
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
        setMeta(result.data.meta);
      };
      fetchData();
    },
    [URL]
  );

 
  return (
    <>
      <SearchTitle>{query}</SearchTitle>
      {meta.total === 0 ? (
        <NoResults />
      ) : (
        <Main>
          <Card data={data} />
        </Main>
      )}
    </>
  );
};

export default Search;
