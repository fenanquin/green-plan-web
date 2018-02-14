export const fetchTransactions = (month, year) => {
  return (dispatch, getState) => {
    let header = new Headers({'Content-Type': 'application/json', 'x-auth': getState().auth.token });
    let url = 'http://localhost:4000/transactions';
    url = month && year ? `${url}?month=${month}&year=${year}` : url;
    return fetch(url, {headers: header})
      .then(res => res.json())
      .then(transactions => dispatch(setTransactions(transactions)));
  }
};

export const setTransactions = (transactions) => ({
  type: 'SET_TRANSACTIONS',
  transactions
});
