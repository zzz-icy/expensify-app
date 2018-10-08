import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

// if not this, do not have access to history outside any component
// make our own history
export const history = createHistory();

const AppRouter = () => (
    // only expects child length of 1
    // then in app.js we can use the 'history', it's the exact same 'history' use in the component to redirect
    <Router history={history}>
        {/*<BrowserRouter>*/}
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/dashboard" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                {/* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params*/}
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} /> {/* do not need path*/}
            </Switch>
        </div>
        {/*</BrowserRouter>*/}
    </Router>
);

export default AppRouter;



