import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => {
    // console.log(props);
    // use react dev tool to see, besides filters, also has a props called dispatch
    return (
        <div>
            <input
                type='text'
                value={props.filters.text}
                // change state in store
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value))
                }}
            >
            </input>
            {/*Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.*/}

            <select
                value={props.filters.sortBy}
                onChange=
                {
                    (e) => {
                        if (e.target.value === 'date') { props.dispatch(sortByDate()) }
                        if (e.target.value === 'amount') { props.dispatch(sortByAmount()) }
                    }
                }
            >
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>

            </select>
        </div>
    );
}

const mapStateToProps = (state) => {
    return (
        {
            filters: state.filters,
        }
    );
};

export default connect(mapStateToProps)(ExpenseListFilters);