import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import reducers from './reducers';

const middlewares = [logger];

export const store = createStore(reducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;
