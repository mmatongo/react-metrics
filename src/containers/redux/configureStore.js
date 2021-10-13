import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import covidReducer from './reducers/covid';
import dataReducer from './reducers/data';

const reducer = combineReducers({
  covidReducer,
  dataReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
