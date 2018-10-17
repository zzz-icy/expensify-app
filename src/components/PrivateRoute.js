import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// export const PrivateRoute = (props) => (
//     <Route {...props} />
// );

// destructure 
export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // rest is just a variable name, can be anything, it represents everything that is not destructured, give us accessto other
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ?
                (<div>
                    <Header />
                    <Component {...props} />
                </div>
                )

                :
                (<Redirect to='/' />)
        )}
        />
    );

const mapStateToProps = (state) => {
    // console.log(state);
    return (
        // use !! make it to a bollean value
        // when try to get access to state for a specific reducer, state.[reducerName in combineReducer].stateName
        { isAuthenticated: !!state.auth.uid, }
    );
};

export default connect(mapStateToProps)(PrivateRoute);


