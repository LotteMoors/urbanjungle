import React, { useState } from "react";
import PlantApi from "./api/plantApi";

import { Main, SideBox, PlantBox, Input, Category } from "./styles";

const Plants = () => {
  const [query, setQuery] = useState("");
  const { FetchPlants, plants } = PlantApi();

  return (
    <Main>
      <SideBox>
        <Category>Category 1</Category>
        <Category>Category 2</Category>
        <Category>Category 3</Category>
        <Category>Category 4</Category>
      </SideBox>

      <PlantBox >
        <Input
          type="text"
          className="search-bar"
          placeholder="Search plant"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={FetchPlants}
        />

        <div>
          <p>{plants.id}</p>
        </div>
      </PlantBox>
    </Main>
  );
};

export default Plants;
