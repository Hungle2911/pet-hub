// load .env data into process.env
require('dotenv').config();

// Web server config
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const PORT = process.env.PORT || 8070;
const app = express();
import index from './router/index'


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); //Parsing incoming request bodies URL-encoded form data
app.use(express.json()) // Parsing req body
app.use(cors()) // Enable cross-platform data exchange


// Separated Routes for each Resource
// console.log(object);
// const index = require('./router/index');
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

// Note: mount other resources here, using the same pattern above

// Home page
app.use('/v1/api', index);




app.listen(PORT, () => {
  console.log(`Hi, I am listening on port ${PORT}`);
});