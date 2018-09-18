import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
// const date = new Date();
// const now = moment(); // initialize
// console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component {
    // we are gonna use local compoennt states to track the user input
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: '',
    };
    onFocusChange = ({ focused }) => {

        this.setState(() => ({ calendarFocused: focused }));

    };
    onDateChange = (createdAt) => {
        if (createdAt) {  // add this condition so that user can not clear the date value
            this.setState(() => ({ createdAt }));
        }
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        // see the explanation for the regular expression at the bottom of this file
        //d{1,} won't allow dot come first
        // have o add "!amount ||""  allow user to clear the input
        // because the match no longer match an empty string
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDescriptionChange = (e) => {  // define method, do not need const
        const description = e.target.value
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {  // define method, do not need const
        const note = e.target.value
        this.setState(() => ({ note }));
        // will not work if we use e.target.value in the callback, have to pull it out as a const first
        // this.setState(() => ({ note:e.target.value }));
        // work around, use the following first
        // e.persisit();
        // this.setState(() => ({ note:e.target.value }));
        // either way works fine
    };
    onSubmit = (e) => {
        e.preventDefault();// prevent the whole page refresh
        if (!this.state.description || !this.state.amount) {
            const error = 'Please provide description and amount!'
            this.setState(() => ({ error }));
        } else {
            this.setState(() => ({ error: '' }));
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} >
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type='text'
                        placeholder='Amount'
                        autoFocus
                        value={this.state.amount}
                        onChange={this.onAmountChange}

                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => { false }} // so that we can choose past date
                    />
                    <textarea
                        placeholder='Add a notes for your expense(optional).'
                        value={this.state.note}
                        onChange={this.onNoteChange}

                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;

// regex explanation

// /^\d*(\.\d{0,2})?$/
// 
// ^ asserts position at start of a line
// \d* matches a digit (equal to [0-9])
// * Quantifier — Matches between zero and unlimited times, as many times as possible, giving back as needed (greedy)
// 1st Capturing Group (\.\d{0,2})?
// ? Quantifier — Matches between zero and one times, as many times as possible, giving back as needed (greedy)
// \. matches the character . literally (case sensitive)
// \d{0,2} matches a digit (equal to [0-9])
// {0,2} Quantifier — Matches between 0 and 2 times, as many times as possible, giving back as needed (greedy)
// $ asserts position at the end of a line
// Global pattern flags
// g modifier: global. All matches (don't return after first match)
// m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)