import axios from 'axios';

export function updateSearch(userQuery) {
  return {
    type: 'UPDATE_SEARCH',
    payload: userQuery
  };
};

export function updateWeatherInfo(userQuery) {
  const weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const key = '&APPID=3043055fcbacbd7d3b91e06f1f110fe9';
  const farenheit = '&units=imperial'
  // const sanDiego = '5391811';
  // const la = '5368361';
  // const newYork = '5128581';
  // const washington = '4140963';
  // const phx = '5308655';
  return {
    type: 'UPDATE_WEATHER_INFO',
    payload: axios({
      method: 'get',
      url: `${weather}${userQuery}${farenheit}${key}`
    })
    .then(response => {
      console.log(response)
      return response;
    })
    .catch((err) => console.log(err))
  }
}