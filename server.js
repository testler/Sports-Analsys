const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const { Sequelize } = require('sequelize');
const statisticRoute = require('./routes/statisticRoute');
const app = express();
const PORT = 8080;
require("dotenv").config();
require("./db/config");

app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/Statistic/", statisticRoute);

app.listen((process.env.PORT || PORT), ()=>{
    console.log("Server is up on port" + PORT);
})