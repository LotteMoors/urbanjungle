import React, { useState } from "react";

import { Main, SideBox, PlantBox, Input, Category } from "./styles";
import Plant from "./Plant";
import Trees from "./Trees";
import Edible from "./Edible";
import Succulents from "./Succulents";
import Flowers from "./Flowers";
import Search from "./Search";

const Plants = () => {
  const [query, setQuery] = useState("");
  const [click, setClick] = useState("All");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Main>
      <SideBox>
        <Category onClick={() => setClick("All")}>All</Category>
        <Category onClick={() => setClick("Trees")}>Trees</Category>
        <Category onClick={() => setClick("Flowers")}>Flowers</Category>
        <Category onClick={() => setClick("Succulents")}>Succulents</Category>
        <Category onClick={() => setClick("Edible")}>Edible</Category>
      </SideBox>
      <PlantBox>
        <Input
          type="text"
          className="search-bar"
          placeholder="Search plant"
          onChange={handleChange}
          value={query}
        />
        {query !== "" ? <Search query={query} /> : null}

        {click === "All" ? (
          <Plant />
        ) : click === "Trees" ? (
          <Trees />
        ) : click === "Edible" ? (
          <Edible />
        ) : click === "Succulents" ? (
          <Succulents />
        ) : click === "Flowers" ? (
          <Flowers />
        ) : (
          <Plant />
        )}
      </PlantBox>
    </Main>
  );
};

export default Plants;
