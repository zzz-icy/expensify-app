// will only be in charge of bootstrap things tha live elsewhere

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
// makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

// props.childern

ReactDOM.render(<AppRouter />, document.getElementById('app'));


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