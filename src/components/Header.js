import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

// https://reacttraining.com/react-router/web/api/NavLink

export const Header = (props) => (
    <header className="header">
        <div className="content-container">
            {/*A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.Adde is-active class to sass style file*/}
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1> Expensify</h1>
                </Link>
                {/* <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink> */}
                {/* <NavLink to="/edit" activeClassName="is-active"> EditExpensePage</NavLink> */}
                {/* <NavLink to="/help" activeClassName="is-active"> Help</NavLink> */}
                <button className="button button--link" onClick={props.startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch, state) => ({
    startLogout: () => (dispatch(startLogout()))
});
export default connect(undefined, mapDispatchToProps)(Header);