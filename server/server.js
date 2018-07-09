const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const weather = 'http://api.openweathermap.org/data/2.5/forecast';
const key = '3043055fcbacbd7d3b91e06f1f110fe9';
const sanDiego = '5391811';
const la = '5368361';
const newYork = '5128581';
const washington = '4140963';
const phx = '5308655';


app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get(`${weather}?id=524901&APPID=${key}`)

module.exports = app;
