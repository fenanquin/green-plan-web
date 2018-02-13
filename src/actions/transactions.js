export const fetchTransactions = () => {
  return (dispatch, getState) => {
    let header = new Headers({'Content-Type': 'application/json', 'x-auth': getState().auth.token });
    return fetch('http://localhost:4000/transactions', {headers: header})
      .then(res => res.json())
      .then(transactions => dispatch(setTransactions(transactions)));
  }
};

export const setTransactions = (transactions) => ({
  type: 'SET_TRANSACTIONS',
  transactions
});
