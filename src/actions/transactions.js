export const fetchTransactions = (month, year) => {
  return (dispatch, getState) => {
    console.log('fetchTransactions');
    let header = new Headers({'Content-Type': 'application/json', 'x-auth': getState().auth.token });
    let url = 'http://localhost:4000/transactions';
    url = month && year ? `${url}?month=${month}&year=${year}` : url;
    return fetch(url, {headers: header})
      .then(res => res.json())
      .then(transactions => dispatch(setTransactions(transactions)));
  };
};

export const setTransactions = (transactions) => ({
  type: 'SET_TRANSACTIONS',
  transactions
});

export const createTransaction = (transaction = {}) => {
  return (dispatch, getState) => {
    console.log('createTransaction');
    let header = new Headers({'Content-Type': 'application/json', 'x-auth': getState().auth.token });
    let url = 'http://localhost:4000/transactions';
    return fetch(url, {headers: header, method: 'POST', body: JSON.stringify(transaction)})
      .then(res => res.json())
      .then((responseBody) => dispatch(addTransaction(responseBody)));
  };
};

export const addTransaction = (transaction) => ({
  type: 'ADD_TRANSACTION',
  transaction
});

export const updateTransaction = (id, updates) => {
  return (dispatch, getState) => {
    console.log('updateTransaction');
    let header = new Headers({'Content-Type': 'application/json', 'x-auth': getState().auth.token });
    let url = `http://localhost:4000/transactions/${id}`;
    return fetch(url, {headers: header, method: 'PUT', body: JSON.stringify(updates)})
      .then(res => {
        if (res.ok) {
          dispatch(editTransaction(id, updates))
        }
      });
  };
};

export const editTransaction = (id, updates) => ({
  type: 'EDIT_TRANSACTION',
  id,
  updates
});

export const deleteTransaction = (id) => {
  return (dispatch, getState) => {
    console.log('deleteTransaction');
    let header = new Headers({'Content-Type': 'application/json', 'x-auth': getState().auth.token });
    let url = `http://localhost:4000/transactions/${id}`;
    return fetch(url, {headers: header, method: 'DELETE'})
      .then(res => {
        if (res.ok) {
          dispatch(removeTransaction(id))
        }
      });
  };
};

export const removeTransaction = (id) => ({
  type: 'REMOVE_TRANSACTION',
  id
});
