import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transactionsReducer from '../reducers/transactions';

export default () => {
  return createStore(
    combineReducers({
      transactions: transactionsReducer
    }),
    applyMiddleware(thunk)
  );
};
