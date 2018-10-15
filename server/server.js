const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const axios = require ("axios");

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/:str', (req,res) => {
    axios.get(
        (`http://www.omdbapi.com/?s=${req.params.str}&apikey=${process.env.OMDb_API}`)
      )
      .then(response => res.send(response.data));
});


app.get('/api2/:str', (req,res) => {
    axios.get(
        (`http://www.omdbapi.com/?i=${req.params.str}&apikey=${process.env.OMDb_API}`)
        )
        .then(response => res.send(response.data));
})
module.exports = app;