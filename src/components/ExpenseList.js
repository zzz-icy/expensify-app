import React from 'react';
import { connect } from 'react-redux';
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => {
    // console.log(props.expenses);
    const expenses = props.expenses;
    return (
        <div className="content-container">
            <div className="list-header">
                {/* show expenses only for mobile devices*/}
                <div className="show-for-mobile">Expenses</div>
                {/* only for wider screen*/}
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className='list-body'>
                {
                    props.expenses.length === 0 ?
                        (
                            <div className="list-item">
                                <span className="list-item__message">No expenses</span>
                            </div>
                        ) :
                        (
                            expenses.map(
                                (item) => (
                                    <ExpenseListItem data={item} key={item.id} />
                                )
                                //<ExpenseListItem data={item} {...item} />
                                // if the data is passed in like {...item}, in ExpenseListItem will can use the destructure version
                            )
                        )
                }
            </div>
        </div>
    )
};

// [mapStateToProps(state, [ownProps]): stateProps] (Function):  If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
const mapStateToProps = (state) => {
    console.log(state);
    return ({
        // use selector here
        // we always want the filtered result to present
        expenses: selectExpenses(state.expenses, state.filters),  // have access to it as props
        // filters: state.filters,
    });
};

export default connect(
    // provide information about what we want connect
    // like we might only need a subset of the huge amount of states in store
    mapStateToProps,
)(ExpenseList);
// because connect() returns a function, not directly a HOC
// It does not modify the component class passed to it; instead, it returns a new, connected component class for you to use.

