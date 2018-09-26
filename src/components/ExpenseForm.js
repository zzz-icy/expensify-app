import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
// const date = new Date();
// const now = moment(); // initialize
// console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component {
    // we are gonna use local compoennt states to track the user input
    // we have to use constructor here 
    // cause wo have to access props together with states
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',//props.expense.amount is number, but here is text
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),//props.expense.createdAt is timeStamp
            calendarFocused: false,
            error: '',
        };
    }
    // state = {
    //     description: '',
    //     note: '',
    //     amount: '',
    //     createdAt: moment(),
    //     calendarFocused: false,
    //     error: '',
    // };
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
            const expense = {
                // ...this.props.expense, // have to check if this.props.expense exists
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,  // in cents
                createdAt: this.state.createdAt.valueOf(),// we need timeStamp here
            }
            this.props.onSubmit(expense); // these are two different onSubmit method
            // console.log('submitted!');
        }
    }

    render() {
        // console.log(this.props.expense);

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
