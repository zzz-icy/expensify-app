import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import SelectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export class ExpensesSummary extends React.Component {


    render() {
        const expenseWord = this.props.expensesCount === 1 ? 'expense' : 'expenses';
        const formattedExpneseTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00');
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">
                        Viewing&nbsp;
                        {/* add <span> to style the dynamic part */}
                        <span>{this.props.expensesCount}&nbsp;</span>
                        {expenseWord} totalling&nbsp;
                        <span>{formattedExpneseTotal}</span>&nbsp;
                    </h1>
                    <div lassName="page-header__action">
                        <Link className="button" to="/create"> Add Expense </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: SelectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
