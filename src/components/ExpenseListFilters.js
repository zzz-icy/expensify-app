import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
// stateless function to class, props => this.props
class ExpenseListFilters extends React.Component {
    // console.log(props);
    // use react dev tool to see, besides filters, also has a props called dispatch
    state = {
        calendarFocused: null,
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        return (
            <div>
                {/*controlled input*/}
                <input
                    type='text'
                    value={this.props.filters.text}
                    // change state in store
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                >
                </input>
                {/*Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.*/}

                <select
                    value={this.props.filters.sortBy}
                    onChange=
                    {
                        (e) => {
                            if (e.target.value === 'date') { this.props.dispatch(sortByDate()) }
                            else if (e.target.value === 'amount') { this.props.dispatch(sortByAmount()) }
                        }
                    }
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>

                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start" // needed for the latest version of react-dates
                    endDate={this.props.filters.endDate}
                    endDateId="end"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => { false }} // so that we can choose past date
                />
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return (
        {
            filters: state.filters,
        }
    );
};

export default connect(mapStateToProps)(ExpenseListFilters);