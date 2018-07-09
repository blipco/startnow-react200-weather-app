const defaultState = {
search : ''
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH' : {
      return {
        search: payload.search
      }
    }
  }

};