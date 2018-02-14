import React from 'react';
import { connect } from 'react-redux';
import { fetchTransactions } from '../actions/transactions';

class TransactionListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeDateFilter = this.onChangeDateFilter.bind(this);
    let now = new Date();
    this.state = {
      dateFilter: `${now.getMonth() + 1}/${now.getFullYear()}`
    };
  }

  onChangeDateFilter(dateFilter) {
    if (!dateFilter || dateFilter.match(/^\d{1}\/{0,1}$/) || dateFilter.match(/^\d{1,2}\/\d{1,3}$/)) {
      this.setState({ dateFilter: dateFilter >= '2' && !dateFilter.includes('/') ? `${dateFilter}/` : dateFilter });
    } else if (dateFilter.match(/^\d{2}$/)) {
      this.setState({ dateFilter: `${dateFilter}/` });
    } else if (dateFilter.match(/^\d{1,2}\/\d{4}$/)) {
      let parts = dateFilter.split('/');
      this.setState({ dateFilter });
      this.props.dispatch(fetchTransactions(parts[0], parts[1]));
      console.log('requested');
    } else {
      console.log('not');
    }
  }

  onFocusDateFilter(dateFilter) {
    if (dateFilter.match(/^\d{1,2}\/\d{4}$/)) {
      this.setState({ dateFilter: '' });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.dateFilter}
          onChange={e => { this.onChangeDateFilter(e.target.value) }}
          onFocus={e => { this.onFocusDateFilter(e.target.value) }}
        />
      </div>
    );
  }
}

export default connect()(TransactionListFilter);
