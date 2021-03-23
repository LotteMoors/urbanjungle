import React from "react";

import { Main, SideBox, PlantBox, Input, Category } from "./styles";

const Plants = () => {
  // const [query, setQuery] = useState(null)
 

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
          // onChange={(e) => setQuery(e.target.value)}
          // value={query}
        />

        
      </PlantBox>
    </Main>
  );
};

export default Plants;
