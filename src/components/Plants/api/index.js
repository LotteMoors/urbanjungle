import fetch from "node-fetch";


const getPlants = () => {
  
  const apiURL =
    "https://trefle.io/api/v1/species?token=Fvppw0rWoJBQRNwj0bnOURGVvr7vzGTkAub8v7r3S8M";

    
    fetch(apiURL, {
    mode: "cors",
    method: "GET",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  })
    .then((response) => {
      response.json();
    })
    .then((b) => b.data)
    .then((pl) => {
      console.log(pl);
    })
    .catch((e) => console.error(e.message));
    
 
};

export default getPlants;
