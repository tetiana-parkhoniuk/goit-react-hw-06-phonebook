import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import App from './App';
import store from './redux/store';
import { myAction } from './redux/actions';

console.log(store);
store.dispatch(myAction(5));
store.dispatch(myAction(10));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
