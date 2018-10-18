import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
// import { addExpense } from '../actions/expenses';
import { startAddExpense } from '../actions/expenses';
// will get error TypeError: (0 , _someModule2.default) is not a function(…)_


export class AddExpensePage extends React.Component { // export so that we can test the unconnected one
    onSubmit = (expense) => {
        // this.props.addExpense(expense);
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {/* we need the full width background color, so page-header has to come first */}
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title"> Add Expense </h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm  // this component can be reused for edit expense
                        onSubmit={this.onSubmit}
                    />
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    // addExpense: (expense) => (dispatch(addExpense(expense))),
    startAddExpense: (expense) => (dispatch(startAddExpense(expense))),

});

// then we have dispatch as props
export default connect(undefined, mapDispatchToProps)(AddExpensePage); 
