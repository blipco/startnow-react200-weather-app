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
  const farenheit = '&units=imperial';

  return {
    type: 'UPDATE_WEATHER_INFO',
    payload: axios({
      method: 'get',
      url: `${weather}${userQuery}${farenheit}${key}`
    })
      .then(response => {
        
        return response;
      })
      .catch((err) => console.log(err))
  };
};

export function updateHistory(userQuery) {

  return {
    type: 'UPDATE_HISTORY',
    payload: {
      cityNombre: userQuery.replace(/\b\w/g, l => l.toUpperCase()),
      searchDate: new Date().toString()
    }
  };
};