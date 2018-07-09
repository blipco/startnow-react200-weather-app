import { combineReducers } from 'redux';
import searchReducer from './components/searchBar/searchReducer';
import tabsReducer from './components/tabs/tabsReducer';

const rootReducer = combineReducers({
search: searchReducer,
tabs: tabsReducer
});

export default rootReducer;
