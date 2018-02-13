import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transactionsReducer from '../reducers/transactions';
import authReducer from '../reducers/auth';

export default () => {
  return createStore(
    combineReducers({
      transactions: transactionsReducer,
      auth: authReducer
    }),
    applyMiddleware(thunk)
  );
};
