// higher order component - a component(HOC) that reders another component
// reuse code 
// render hijacking
// prop manapulation
// abstract state


import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>The info is: {props.info}</p>
    </div>

);

// 1st example, allow us add message to each component without needing the code below, and reuse code
const withAdminWarning = (WrappedComponent) => {
    // return a hoc component
    return (props) => (
        <div>
            {/* isAdmin, choose to use or not the message*/}
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} /> {/* take in every key value pair on that object, and passing down as props*/}
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    // return a hoc component
    return (props) => (
        <div>
            {/* isAdmin, choose to use or not the message*/}
            {
                props.isAuthenticated
                    ?
                    (<WrappedComponent {...props} />)
                    :
                    (<p>Please login to the info!</p>)
            }

        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);




// ReactDom.render(<AdminInfo isAdmin={true} info='These are the details' />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info='These are the details' />, document.getElementById('app'));


