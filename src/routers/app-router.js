import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import TransactionDashboardPage from '../components/transaction-dashboard-page';
import AddTransactionPage from '../components/add-transaction-page';
import EditTransactionPage from '../components/edit-transaction-page';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={TransactionDashboardPage} exact={true} />
      <Route path='/create' component={AddTransactionPage} />
      <Route path='/edit' component={EditTransactionPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
