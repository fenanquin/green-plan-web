import React from 'react';
import { TransactionListItem } from './transaction-list-item';

export const TransactionList = (props) => (
  <div>
    {
      props.transactions.map((transaction) => (
        <TransactionListItem key={transaction.id} {...transaction} />
      ))
    }
  </div>
);
