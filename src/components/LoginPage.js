import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button
                onClick={props.startLogin}
                className="button"
            >
                Login with Google
        </button>
            <div className="box-layout__infobox">
                <p className="box-layout__info">(If you are not comfortable logging in with yours:</p>
                <p className="box-layout__info">Account: hannah.guest12345@gmail.com</p>
                <p className="box-layout__info">Password:Guest123!)</p>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
