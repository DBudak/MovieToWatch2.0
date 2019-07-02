//Redux
import { createStore } from 'redux';

//Routing
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//RootReducer
import  rootReducer from './reducers/rootReducer';

//Middleware
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

//Initial State
const initialState = {
    genres:{
        received : false,
        data : [],
        userChoice : []
    },
    movies: {
        received : false,
        noMoviesFound : false,
        data: [],
        featuredMovie : {}
    },
    config : {
        received : false,
        data : {}
    }
};

const loggerMiddleware = createLogger()

//Store
const store = createStore(rootReducer, initialState);

//Routing History
export const history = syncHistoryWithStore(browserHistory, store, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;

