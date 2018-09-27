import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import SelectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

class ExpensesSummary extends React.Component {


    render() {
        return (
            <div>
                <p>
                Viewing&nbsp;
                {this.props.expenses.length}&nbsp;
                expenses totalling&nbsp;
                {numeral(SelectExpensesTotal(this.props.expenses) / 100).format('$0,0.00')}&nbsp;
    
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
