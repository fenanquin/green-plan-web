import React from 'react';
import ReactDOM from 'react-dom';
import { TransactionList } from './components/transaction-list';

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

const jsx = (
  <div>
    <TransactionList transactions={transactions} />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
