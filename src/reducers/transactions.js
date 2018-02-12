export default (state = transactions, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

const transactions = [{
  id: 1,
  description: 'Rent Bill',
  amount: 100,
  date: new Date()
}, {
  id: 2,
  description: 'Water Bill',
  amount: 200,
  date: new Date()
}, {
  id: 3,
  description: 'Gas Bill',
  amount: 300,
  date: new Date()
}];
