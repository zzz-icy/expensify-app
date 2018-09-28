import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import SelectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export class ExpensesSummary extends React.Component {


    render() {
        const expenseWord = this.props.expensesCount === 1 ? 'expense' : 'expenses';
        const formattedExpneseTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00');
        return (
            <div>
                <h2>
                    Viewing&nbsp;
                {this.props.expensesCount}&nbsp;
                {expenseWord} totalling&nbsp;
                {formattedExpneseTotal}&nbsp;
                </h2>
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
