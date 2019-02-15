import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
//import store from './playground/redux-101';

//using this tutorial:
// https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/

ReactDOM.render((
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
), document.getElementById('root'));

// ReactDOM.render(routes, document.getElementById('root'))
// ReactDOM.render(store, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
