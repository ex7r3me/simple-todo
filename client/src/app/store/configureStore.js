import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

function configureStore() {
  // configure middlewares
  return createStore(rootReducer, thunk);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;