const express = require('express')
const app = express();

const {getPlants} = require('./controller/plantController')


app.use('/views/img/', express.static('./views/img'));
app.use(express.urlencoded({ extended : false}))

app.set('view engine', 'ejs')


app.get('/', getPlants)


const port = process.env.PUBLIC_URL || 3001

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})