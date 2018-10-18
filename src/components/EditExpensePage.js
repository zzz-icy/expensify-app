import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    // console.log(props);
    /* /:id will dynamically match whater comes after the forward slash, id is gonna be in the props.match.params, so we can take that value and fetch data from database */

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });// need to pass in an object
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">

                        <h1 className="page-header--title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    {/* Editing expense with the ID of {this.props.expense.id} */}

                    {/* Editing expense with the ID of {props.expense.id}, ?can not use props.expense.id above, why?*/}

                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                        buttonName="Save Expense"
                    />
                    <button
                        onClick={this.onRemove}
                        className="button button--secondary"
                    >
                        Remove Expense
                    </button>
                </div>
            </div>
        );
    }

};
const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, updates) => (dispatch(startEditExpense(id, updates))),
    startRemoveExpense: (id) => (dispatch(startRemoveExpense(id))),
});

// If your mapDispatchToProps function is declared as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props. (The second parameter is normally referred to as ownProps by convention.)

const mapStateToProps = (state, props) => {
    console.log(state);
    return {
        expense: state.expenses.find(((item) => { return item.id === props.match.params.id })),

    }
};

// It does not modify the component class passed to it; instead, it returns a new, connected component class for you to use.
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);