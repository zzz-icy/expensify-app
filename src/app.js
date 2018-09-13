// will only be in charge of bootstrap things tha live elsewhere

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
// https://reacttraining.com/react-router/web/api/NavLink
// makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
import 'normalize.css/normalize.css';
import './styles/styles.scss';
const NotFoundPage = () => (
    <div>
        404! <Link to="/"> Go home</Link>
        {/*no whole page refresh, client side routing*/}
    </div>
);
const HelpPage = () => (
    <div>
        This is my HelpPage component!
    </div>
);
const AddExpensePage = () => (
    <div>
        This is my AddExpensePage component!
    </div>
);
const EditExpensePage = () => (
    <div>
        This is my EditExpensePage component!
    </div>
);
const ExpenseDashboardPage = () => (
    <div>
        This is my ExpenseDashboardPage component!
    </div>
);

const Header = () => (
    <header>
        <h1> Expensify</h1>
        {/*A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.Adde is-active class to sass style file*/}

        <NavLink exact to="/" activeClassName="is-active"> HomePage</NavLink>
        <NavLink to="/create" activeClassName="is-active"> AddExpensePage</NavLink>
        <Link to="/edit"> EditExpensePage</Link>
        <Link to="/help"> HelpPage</Link>
    </header>
);
const routes = (
    // only expects child length of 1
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} /> {/* do not need path*/}
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));


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