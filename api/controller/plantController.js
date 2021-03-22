const fetch = require('node-fetch');
const apiURL = ('https://trefle.io/api/v1/plants?token=Fvppw0rWoJBQRNwj0bnOURGVvr7vzGTkAub8v7r3S8M');




const getPlants = (req,res) => {
    fetch(apiURL) 
    .then(res => res.json())
    .then(b => b.data)  
    .then(pl => {
        res.render('search', {pl:pl})
    })
}

// const getPlant = (req,res) => {
//     fetch(apiURL) 
//     .then(res => res.json())
//     .then(b => b.data)  
//     .then(pl => {
//         console.log(pl)
//         res.render('search', {pl:pl})
//     })
// }




module.exports = {getPlants}