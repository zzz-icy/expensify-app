import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
// will get error TypeError: (0 , _someModule2.default) is not a function(…)_


class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        props.onSubmit(expense);
        props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1> This is my AddExpensePage component!</h1>
                <ExpenseForm  // this component can be reused for edit expense
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => (dispatch(addExpense(expense))),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage); // then we have dispatch as props