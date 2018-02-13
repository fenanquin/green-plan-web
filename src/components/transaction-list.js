import React from 'react';
import { TransactionListItem } from './transaction-list-item';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions/transactions';

class TransactionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchTransactions());
  }

  render() {
    return (
      <div>
        {
          this.props.transactions.map((transaction) => (
            <TransactionListItem key={transaction.id} {...transaction} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(TransactionList);
