const defaultState = {
userQuery : ''
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH' : {
      return {
        userQuery: payload.userQuery
      }
    }
    default: {
      return state;
    };
  };

};