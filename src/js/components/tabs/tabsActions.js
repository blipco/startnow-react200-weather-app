import axios from 'axios';

export function updateSanDiego() {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?id=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  const sanDiego = 5391811;

  return {
    type: 'UPDATE_SAN_DIEGO',
    payload: axios({
      method: 'get',
      url: `${weather}${sanDiego}${farenheit}${key}`
    })
    .then(response => {
      console.log(response)
      return response;
    })
    .catch((err) => console.log(err))
  }
};

export function updateNewYork() {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?id=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  const newYork = 5128581;
  
  return {
    type: 'UPDATE_NEW_YORK',
    payload: axios({
      method: 'get',
      url: `${weather}${newYork}${farenheit}${key}`
    })
    .then(response => {
      console.log(response)
      return response;
    })
    .catch((err) => console.log(err))
  }
};

export function updateWashington() {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?id=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  const washington = 4140963;

  return {
    type: 'UPDATE_WASHINGTON',
    payload: axios({
      method: 'get',
      url: `${weather}${washington}${farenheit}${key}`
    })
    .then(response => {
      console.log(response)
      return response;
    })
    .catch((err) => console.log(err))
  }
};

export function updatePhoenix() {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?id=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  const phx = 5308655;

  return {
    type: 'UPDATE_PHOENIX',
    payload: axios({
      method: 'get',
      url: `${weather}${phx}${farenheit}${key}`
    })
    .then(response => {
      console.log(response)
      return response;
    })
    .catch((err) => console.log(err))
  }
};

export function updateLa() {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?id=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial';
  const la = 5368361;

  return {
    type: 'UPDATE_LA',
    payload: axios({
      method: 'get',
      url: `${weather}${la}${farenheit}${key}`
    })
    .then(response => {
      console.log(response)
      return response;
    })
    .catch((err) => console.log(err))
  }
};