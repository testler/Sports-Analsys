const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const PORT = 8000;

app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen((process.env.PORT || PORT), ()=>{
    console.log("Server is up on port" + PORT);
})