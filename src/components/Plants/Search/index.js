import React, { useState, useEffect } from "react";
import axios from "axios";
import { Main, PlantBox } from "./styles";

const Search = ({query}) => {
  const [data, setData] = useState({});
  const URL = `/api/v1/plants/search?token=Fvppw0rWoJBQRNwj0bnOURGVvr7vzGTkAub8v7r3S8M&q=${query}`

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL, {
        method:'GET',
        mode:'no-cors',
        headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Content-Type' : 'application/json'
        },
        widthCredentials: true
      })

      setData(result.data);
    };

    fetchData();
  }, [URL]);



  return (
    <Main>    

      <PlantBox>       
          
        <p>
        {data.common_name}
        </p>    
      </PlantBox>
    </Main>
  );
};

export default Search;