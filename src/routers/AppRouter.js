import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';
// if not this, do not have access to history outside any component
// make our own history
export const history = createHistory();

const AppRouter = () => (
    // only expects child length of 1
    // then in app.js we can use the 'history', it's the exact same 'history' use in the component to redirect
    <Router history={history}>
        {/*<BrowserRouter>*/}
        <div>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                {/* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params*/}
                <Route component={NotFoundPage} /> {/* do not need path*/}
            </Switch>
        </div>
        {/*</BrowserRouter>*/}
    </Router>
);

export default AppRouter;



