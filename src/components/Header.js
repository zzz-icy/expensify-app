import React from 'react';
import { NavLink } from 'react-router-dom';
// https://reacttraining.com/react-router/web/api/NavLink

const Header = () => (
    <header>
        <h1> Expensify</h1>
        {/*A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.Adde is-active class to sass style file*/}

        <NavLink exact to="/" activeClassName="is-active"> Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
        {/* <NavLink to="/edit" activeClassName="is-active"> EditExpensePage</NavLink> */}
        <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </header>
);

export default Header;