const express = require('express');
const mongoose = require('mongoose');
const port =  5000; 
const connectdb=require('./Config/connect')
const User=require('./models/user')
require('dotenv').config({path:'./Config/.env'})
const app = express();
const cors = require("cors");


const corsOptions = {
   origin: '*',
   credentials: true,
   optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use("/uploads",express.static(__dirname+"/uploads"))

//routes
app.use("/api/product",require('./Routes/productRoutes'))
app.use("/api/user",require('./Routes/userRoute'))





connectdb()
app.listen(port,(err)=>{err?console.log(err):console.log("server running");})
