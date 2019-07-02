import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import genres from './genres';
import movies from './movies';
import config from './config';

const rootReducer = combineReducers({
    genres,
    movies,
    config,
    routing: routerReducer
});

export default rootReducer;