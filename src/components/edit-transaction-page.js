import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from './transaction-form';
import { updateTransaction, deleteTransaction } from '../actions/transactions';

const EditTransactionPage = (props) => (
  <div>
    <h1>Edit transaction</h1>
    <TransactionForm
      {...props.transaction}
      onSubmit={(transaction) => {
        props.edit(props.transaction.id, transaction);
        props.history.push('/');
      }}
    />
    <button
      onClick={() => {
        props.remove(props.transaction.id);
        props.history.push('/');
      }}
    >Remove</button>
  </div>
);

const mapStateToProps = (state, props) => ({
  transaction: state.transactions.find((t) => t.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  edit: (id, transaction) => dispatch(updateTransaction(id, transaction)),
  remove: (id) => dispatch(deleteTransaction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionPage);
