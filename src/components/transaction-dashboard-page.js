import React from 'react';
import { TransactionList } from './transaction-list';
import { TransactionListFilter } from './transaction-list-filter';

const transactions = [{
  id: 1,
  description: 'Rent Bill',
  amount: 100,
  date: new Date()
}, {
  id: 2,
  description: 'Water Bill',
  amount: 200,
  date: new Date()
}, {
  id: 3,
  description: 'Gas Bill',
  amount: 300,
  date: new Date()
}]

const TransactionDashboardPage = () => (
  <div>
    <TransactionListFilter />
    <TransactionList transactions={transactions} />
  </div>
);

export default TransactionDashboardPage;
