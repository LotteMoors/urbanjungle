import React, {useState} from "react";
import { Input } from 'reactstrap'
import "./plants.scss";
import PlantApi from './plantApi'

const Plants = () => {
    
  const [query, setQuery] = useState('');
  const {FetchPlants, plants} = PlantApi();


  return (
    <div className="search-plantz">
      <div className="side-box">bbb</div>
     

      <div className="main-box">
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
      </div>
    </div>
  );
};

export default Plants;
