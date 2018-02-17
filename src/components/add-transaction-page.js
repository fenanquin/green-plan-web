import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from './transaction-form';
import { createTransaction } from '../actions/transactions';

const AddTransactionPage = (props) => (
  <div>
    <h1>Add transaction</h1>
    <TransactionForm
      onSubmit={(transaction) => {
        props.onSubmit(transaction);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (transaction) => dispatch(createTransaction(transaction))
});

export default connect(undefined, mapDispatchToProps)(AddTransactionPage);
