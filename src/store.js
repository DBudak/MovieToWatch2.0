import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const initialState = {
    genres: {
        received: false,
        data: [],
        userChoice: []
    },
    movies: {
        received: false,
        noMoviesFound: false,
        data: [],
        featuredMovie: {}
    },
    config: {
        received: false,
        data: {}
    }
};

const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
};

