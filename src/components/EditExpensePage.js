import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    // console.log(props);
    /* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params, so we can take that value and fetch data from database */

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });// need to pass in an object
        this.props.history.push('/');
    };
    render() {
        return (
            <div>

                {/* Editing expense with the ID of {this.props.expense.id} */}

                {/* Editing expense with the ID of {props.expense.id}, ?can not use props.expense.id above, why?*/}
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onRemove}
                >
                    Remove
            </button>
            </div>
        );
    }

};
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (expense, id) => (dispatch(editExpense(expense, id))),
    removeExpense: (data) => (dispatch(removeExpense(data))),
});

// If your mapDispatchToProps function is declared as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props. (The second parameter is normally referred to as ownProps by convention.)

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(((item) => { return item.id === props.match.params.id })),
});

// It does not modify the component class passed to it; instead, it returns a new, connected component class for you to use.
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);