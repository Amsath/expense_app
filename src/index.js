import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/index.css';
// import 'font-awesome/css/font-awesome.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, document.getElementById('root'));
