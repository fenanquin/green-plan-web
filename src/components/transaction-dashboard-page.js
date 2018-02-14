import React from 'react';
import TransactionList from './transaction-list';
import TransactionListFilter from './transaction-list-filter';

const TransactionDashboardPage = () => (
  <div>
    <TransactionListFilter />
    <TransactionList />
  </div>
);

export default TransactionDashboardPage;
