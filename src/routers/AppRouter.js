import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../styles/index.css';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import AddIncomePage from '../components/AddIncomePage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}  >
    <div>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/addExpense" component={AddExpensePage} />
        <Route path="/addIncome" component={AddIncomePage} />
        {/* <PublicRoute path="/edit/:id" component={EditExpensePage} /> */}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;



// const PageNotFound = () => (
//     <div>
//         <img src={require('../404.jpg')} alt="Page not Found" style={{width: '50%', height: '50%', display: 'block', margin: 'auto', position: 'relative' }} />
//         <center>
//             <Link to="/">
//             Return to Home Page
//             </Link>
//         </center>
//     </div>
// );