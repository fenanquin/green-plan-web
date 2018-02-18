import React from 'react';
import { Link } from 'react-router-dom';
import TransactionList from './transaction-list';
import TransactionListFilter from './transaction-list-filter';

const TransactionDashboardPage = () => (
  <div>
    <TransactionListFilter />
    <Link to="/create">Add Transaction</Link>
    <TransactionList />
  </div>
);

export default TransactionDashboardPage;
