import React from 'react';

export const TransactionListItem = ({description, amount, date}) => (
  <div>
    <a href="#">
      <p>{description} --- {date.toString()} --- {amount}</p>
    </a>
  </div>
);
