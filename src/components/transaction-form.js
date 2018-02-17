import React from 'react';

export default class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.state = {
      description: '',
      date: new Date(),
      amount: ''
    }
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  onDateChange(e) {
    this.setState({ date: e.target.value });
  }

  onAmountChange(e) {
    this.setState({ amount: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log({
      description: this.state.description,
      date: this.state.date,
      amount: this.state.amount
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Date"
          value={this.state.date}
          onChange={this.onDateChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <button>Save</button>
      </form>
    );
  }
}
