import React, { useState } from "react";

import PlantApi from "../../components/Plants/plantApi.js";
import NavBar from "../../components/NavBar";

const Search = () => {
  const [query, setQuery] = useState("");
  const { FetchPlants, plants } = PlantApi();

  return (
    <>
      <NavBar />
      <div className="search-plantz">
        <div className="side-box">bbb</div>

        <div className="main-box">
          <input
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
        </div>
      </div>
    </>
  );
};

export default Search;
