import React from 'react';
import { TransactionListItem } from './transaction-list-item';
import { connect } from 'react-redux';

export const TransactionList = (props) => (
  <div>
    {
      props.transactions.map((transaction) => (
        <TransactionListItem key={transaction.id} {...transaction} />
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(TransactionList);
