const defaultState = {
userQuery : '',
weatherInfo: {
  data: {
    name: '',
    coord: {
      lat: '',
      lon: ''
    },
    main: {
      humidity: '',
      pressure: '',
      temp_max: '',
      temp_min: '',
      temp: '',
    },
    weather: [{
      icon: ''
    }],
    wind: {
      speed: ''
    }
  }
}
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH' : {
      return {
        ...state,
        userQuery: payload
      }
    }
    case 'UPDATE_WEATHER_INFO_FULFILLED' : {
      return {
        ...state,
        weatherInfo: payload
      }
    }
    default: {
      return state;
    };
  };

};