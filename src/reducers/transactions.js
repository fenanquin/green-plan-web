export default (state = [], action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return action.transactions;
    case 'ADD_TRANSACTION':
      return [
        ...state,
        action.transaction
      ];
    case 'EDIT_TRANSACTION':
      return state.map((transaction) => {
        if (transaction.id === action.id) {
          return {
            ...transaction,
            ...action.updates
          };
        } else {
          return transaction;
        }
      });
    case 'REMOVE_TRANSACTION':
      return state.filter((transaction) => {
        return transaction.id !== action.id
      });
    default:
      return state;
  }
};
