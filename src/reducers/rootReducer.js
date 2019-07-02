import { combineReducers } from 'redux';
import genres from './genres';
import movies from './movies';
import config from './config';

const rootReducer = combineReducers({
    genres,
    movies,
    config
});

export default rootReducer;