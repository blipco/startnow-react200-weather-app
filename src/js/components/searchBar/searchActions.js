export function updateSearch(search) {
  return {
    type: 'UPDATE_SEARCH',
    payload: {search}
  };
};