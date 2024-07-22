// store.js

import { createStore, combineReducers } from 'redux';
import formReducer from './reducer/formReducer';

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  form: formReducer
  // Add other reducers here if you have them
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
