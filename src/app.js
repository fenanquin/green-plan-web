import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/app-router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import { fetchTransactions } from './actions/transactions';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(fetchTransactions()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
