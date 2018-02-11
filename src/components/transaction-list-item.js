import React from 'react';

export const TransactionListItem = ({description, amount, date}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {date.toString()}</p>
  </div>
);
