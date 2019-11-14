import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import productsReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
  allReducers,
  {
    products: [{ name: 'iPhone' }],
    user: 'Michael'
  },
  allStoreEnhancers
);


ReactDOM.render(
  <Provider store={store}>
    <App randomProps='whatever' />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
