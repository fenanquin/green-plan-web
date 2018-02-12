import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/app-router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const jsx = (
  <Provider store={configureStore()}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
