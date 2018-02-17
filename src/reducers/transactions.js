export default (state = [], action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return action.transactions;
    case 'ADD_TRANSACTION':
      return [
        ...state,
        action.transaction
      ];
    default:
      return state;
  }
};
