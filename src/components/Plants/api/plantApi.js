// import fetch from "node-fetch";
// import  { useState } from 'react';

// const getPlants = () => {

//   const [plants, setPlants] = useState(null);
//   const apiURL =
//     "https://trefle.io/api/v1/species?token=Fvppw0rWoJBQRNwj0bnOURGVvr7vzGTkAub8v7r3S8M";

//   fetch(apiURL, {
//     mode: "no-cors",
//     method: "GET",
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((b) => b.data)
//     .then((pl) => {
//       console.log(pl);
//       setPlants(pl);
//     })
//     .catch((e) => console.error(e.message));

//     return (
//         <p>
//             {plants}
//         </p>
//     )
// };

// export default getPlants;
