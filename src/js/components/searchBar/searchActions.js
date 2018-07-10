export function updateSearch(userQuery) {
  return {
    type: 'UPDATE_SEARCH',
    payload: {userQuery}
  };
};