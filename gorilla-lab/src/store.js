import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const routerMiddlewareInstance = routerMiddleware(history);

let middlewares;

if (process.env.NODE_ENV === 'development') {
    middlewares = applyMiddleware(routerMiddlewareInstance, thunk, logger);
} else {
    middlewares = applyMiddleware(routerMiddlewareInstance, thunk);
}

const combinedReducers = combineReducers({
    router: routerReducer
});

export default createStore(combinedReducers, middlewares);

