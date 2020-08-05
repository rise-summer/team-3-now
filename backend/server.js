const express = require('express');
const app = express();

var cors = require('cors');

require('dotenv/config');



const connectDB = require('./config/db');

connectDB();




app.get('/', (req, res) => {

    res.send('This API is working');
})






app.listen(process.env.PORT, () => {

    console.log("Server has started on " + process.env.PORT)
})