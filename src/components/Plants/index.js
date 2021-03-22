import React, { useState, useEffect } from "react";
import fetch from "node-fetch";

import { Main, SideBox, PlantBox, Input, Category } from "./styles";

const Plants = () => {
  const [query, setQuery] = useState("");
  const [plants, setPlants] = useState("");

  const apiURL =
    "https://trefle.io/api/v1/species?token=Fvppw0rWoJBQRNwj0bnOURGVvr7vzGTkAub8v7r3S8M";

  useEffect(() => {
    fetch(apiURL, {
      mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((pl) => {
        console.log(pl);
        setPlants(pl);
      })
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <Main>
      <SideBox>
        <Category>Trees</Category>
        <Category>Flowers</Category>
        <Category>Vegetables</Category>
        <Category>Tropical</Category>
      </SideBox>

      <PlantBox>
        <Input
          type="text"
          className="search-bar"
          placeholder="Search plant"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

        <div>{plants && <p>{plants}</p>}</div>
      </PlantBox>
    </Main>
  );
};

export default Plants;
