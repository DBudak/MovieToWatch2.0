//Redux
import { createStore, applyMiddleware } from 'redux';

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


export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
};

