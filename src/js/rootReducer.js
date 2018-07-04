import { combineReducers } from 'redux';
import cityReducer from './components/cityInfo/cityReducer';
import searchReducer from './components/searchBar/searchReducer';
import historyReducer from './components/searchHistory/historyReducer';
import tabsReducer from './components/tabs/tabsReducer';

const rootReducer = combineReducers({
city: cityReducer,
search: searchReducer,
history: historyReducer,
tabs: tabsReducer
});

export default rootReducer;
