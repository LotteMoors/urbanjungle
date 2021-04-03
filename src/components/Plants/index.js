import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import { Main, SideBox, PlantBox, Input, Category } from "./styles";
import Plant from './Plant'

const Plants = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);


  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1)
};


  return (
    <Main>
      <SideBox>
        <Category>All</Category>
        <Category>Trees</Category>
        <Category>Flowers</Category>
        <Category>Succulents</Category>
        <Category>Vegetables</Category>
      </SideBox>

      <PlantBox>
        <Input
          type="text"
          className="search-bar"
          placeholder="Search plant"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

       <Plant page={page} />
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    pageCount={400}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
      </PlantBox>
    </Main>
  );
};

export default Plants;
