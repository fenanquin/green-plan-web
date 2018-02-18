import React from 'react';
import { Link } from 'react-router-dom';

export const TransactionListItem = ({id, description, amount, date}) => (
  <Link to={`/edit/${id}`}>
    <p>{description} --- {date.toString()} --- {amount}</p>
  </Link>
);
