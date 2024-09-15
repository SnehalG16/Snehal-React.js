// store.js

import { combineReducers, createStore } from 'redux';
import counterReducer from './redux/counterReducer';
import themeReducer from './themeredux/themeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
