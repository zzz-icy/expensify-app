import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

// https://reacttraining.com/react-router/web/api/NavLink

export const Header = (props) => (
    <header>
        <h1> Expensify</h1>
        {/*A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.Adde is-active class to sass style file*/}

        <NavLink to="/dashboard" activeClassName="is-active"> Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
        {/* <NavLink to="/edit" activeClassName="is-active"> EditExpensePage</NavLink> */}
        {/* <NavLink to="/help" activeClassName="is-active"> Help</NavLink> */}
        <button onClick={props.startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch, state) => ({
    startLogout: () => (dispatch(startLogout()))
});
export default connect(undefined, mapDispatchToProps)(Header);