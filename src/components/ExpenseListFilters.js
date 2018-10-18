import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
// stateless function to class, props => this.props
export class ExpenseListFilters extends React.Component {
    // console.log(props);
    // use react dev tool to see, besides filters, also has a props called dispatch
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);

    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') { this.props.sortByDate() }
        else if (e.target.value === 'amount') { this.props.sortByAmount() }
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    render() {
        return (
            <div className="content-container">
                {/* make the three filters into three <div>, for mobile friendly*/}
                <div className="input-group">
                    <div className="input-group__item">
                        {/*controlled input*/}
                        <input
                            type='text'
                            value={this.props.filters.text}
                            // change state in store
                            onChange={this.onTextChange}
                            className="text-input"
                        >
                        </input>
                        {/*Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.*/}
                    </div>
                    <div className="input-group__item">
                        <select
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>

                        </select>
                    </div>
                    <div className="input-group__item">
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
                </div>
            </div>
        )
    };
}

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = (dispatch, props) => ({
    setStartDate: (startDate) => (dispatch(setStartDate(startDate))),
    setEndDate: (endDate) => (dispatch(setEndDate(endDate))),
    setTextFilter: (text) => (dispatch(setTextFilter(text))),
    sortByDate: () => (dispatch(sortByDate())),
    sortByAmount: () => (dispatch(sortByAmount()))
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);