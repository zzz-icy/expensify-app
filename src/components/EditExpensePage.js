import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    // console.log(props);
    {/* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params, so we can take that value and fetch data from database*/ }
    return (
        <div>
            Editing expense with the ID of {props.match.params.id}
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.match.params.id, expense));
                    props.history.push('/');
                }}
            />

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