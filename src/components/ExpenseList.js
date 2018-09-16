import React from 'react';
import { connect } from 'react-redux';
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);

// [mapStateToProps(state, [ownProps]): stateProps] (Function):  If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
const mapStateToProps = (state) => {
    return ({
        expenses: state.expenses,  // have access to it as props
        filters: state.filters,
    });
};
export default connect(
    // provide information about what we want connect
    // like we might only need a subset of the huge amount of states in store
    mapStateToProps,

)(ExpenseList);
// because connect() returns a function, not directly a HOC
// It does not modify the component class passed to it; instead, it returns a new, connected component class for you to use.

