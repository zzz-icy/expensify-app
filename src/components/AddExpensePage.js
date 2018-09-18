import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses'; // will get error TypeError: (0 , _someModule2.default) is not a function(…)_

const AddExpensePage = (props) => (
    <div>
        <h1> This is my AddExpensePage component!</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                // console.log(expense);
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);
export default connect()(AddExpensePage); // then we have dispatch as props