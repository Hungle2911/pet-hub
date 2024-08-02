// load .env data into process.env
require('dotenv').config();

// Web server config
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "../routes/userRoutes";
import loginRoutes from "../routes/login";
import checkJwt from "./middleware/auths"; 

const PORT = process.env.PORT || 8070;
const app = express();


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); //Parsing incoming request bodies URL-encoded form data
app.use(express.json()) // Parsing req body
app.use(cors()) // Enable cross-platform data exchange
app.use(cookieParser());


// Separated Routes for each Resource
// console.log(object);
// const index = require('./router/index');
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

// app.use('/v1/api', index);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.use('/api', userRoutes); 
app.use('/login', loginRoutes);

app.listen(PORT, () => {
  console.log(`Hi, I am listening on port ${PORT}`);
  console.log(process.env.AUTH0_DOMAIN);
  
});