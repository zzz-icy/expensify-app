import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    // console.log(props);
    {/* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params, so we can take that value and fetch data from database*/ }
    return (
        <div>

            Editing expense with the ID of {props.match.params.id}

            {/* Editing expense with the ID of {props.expense.id}, can not use props.expense.id above, why?*/}
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button
                onClick={
                    () => {
                        props.dispatch(removeExpense({ id: props.expense.id }));// need to pass in an object
                        props.history.push('/');

                    }
                }
            >
                Remove
        </button>
        </div>
    );
};
const mapStateToProps = (state, props) => {
    return (
        {
            expense: state.expenses.find(((item) => { return item.id === props.match.params.id })),
        }
    );
}

export default connect(mapStateToProps)(EditExpensePage);