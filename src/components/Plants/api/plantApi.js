import { useState } from "react";
import fetch from "node-fetch";

const PlantApi = (query) => {
  const [plants, setPlants] = useState({});
  

  const api = {
    base: "https://trefle.io/api/v1",
    token: "?token=Fvppw0rWoJBQRNwj0bnOURGVvr7vzGTkAub8v7r3S8M",
    type: "",
  };

  const FetchPlants = () => {
    fetch(`${api.base}/species/search${api.token}&q=${query}`)
      .then((response) => response.json())
      .then((pl) => {
        setPlants(pl);
        console.log(pl.data);
      });
  };



  return { FetchPlants, plants };
};

export default PlantApi;
