// will only be in charge of bootstrap things tha live elsewhere

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
// makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
import { Provider } from 'react-redux';
// https://github.com/reduxjs/react-redux
// We're going to be using the 'Provider' component once at the root of our application(app.js) and we're going to be using 'connect' for every single component that needs to connect to the redux store.
import './styles/styles.scss';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import './firebase/firebase';
import { firebase } from './firebase/firebase';


const store = configureStore();

// console.log('test'); // to test if source map is still working

// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));


// store.dispatch(setTextFilter('water'));

// we use mapStateToProps, will rerender
// setTimeout(
//     () => { store.dispatch(setTextFilter('bill')) }
//     , 2000);

// const state = store.getState();
// console.log(state);

// console.log(getVisibleExpenses(state.expenses, state.filters));
// props.childern

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// startSetExpenses will retura a promise

let hasRendered = false;
const renderApp = () => {  // so that the app only render once
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
    // if has rendered then do nothing
}



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // console.log(user.uid);  // need a reducer and user the uid to authenticate user, whether certain pages are allowed to be seen
        store.dispatch(login(user.uid));  // should not be in the startLogin, for the case when user first visit the app
        store.dispatch(startSetExpenses()).then(() => {
            // ReactDOM.render(jsx, document.getElementById('app'));
            // if we already in the app, we login and logout, we do not want to rerender everything
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        // ReactDOM.render(jsx, document.getElementById('app'));
        store.dispatch(logout());
        renderApp();
        history.push('/');  // go to the login page
    }
});




// <Switch>
// Renders the first child <Route> or <Redirect> that matches the location.
// If the URL is /about, then <About>, <User>, and <NoMatch> will all render because they all match the path. This is by design, allowing us to compose <Route>s into our apps in many ways, like sidebars and breadcrumbs, bootstrap tabs, etc.Occasionally, however, we want to pick only one <Route> to render. If we’re at /about we don’t want to also match /:user (or show our “404” page). Here’s how to do it with Switch:import { Switch, Route } from 'react-router'

// <Switch>
//   <Route exact path="/" component={Home}/>
//   <Route path="/about" component={About}/>
//   <Route path="/:user" component={User}/>
//   <Route component={NoMatch}/>
// </Switch>
// Now, if we’re at /about, <Switch> will start looking for a matching <Route>. <Route path="/about"/> will match and <Switch> will stop looking for matches and render <About>. Similarly, if we’re at /michael then <User> will render.This is also useful for animated transitions since the matched <Route> is rendered in the same position as the previous one.
