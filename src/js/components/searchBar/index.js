import { connect } from 'react-redux';
import searchBar from './searchBar';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    userQuery: store.search.userQuery
  };
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(searchBar);