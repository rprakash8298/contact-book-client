import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { rootReducer } from './reducers/index'
import App from './App';

const initialState = {}
const middlewares = [thunkMiddleware]
const middlewareEnchancer = applyMiddleware(...middlewares)

const enchancer = [middlewareEnchancer]
const composedEnhancers = composeWithDevTools(...enchancer)

const store = createStore(rootReducer,initialState,composedEnhancers)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
