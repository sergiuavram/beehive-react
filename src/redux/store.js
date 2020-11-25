import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunk]; // i don't know what ‘logger’ does right now

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
