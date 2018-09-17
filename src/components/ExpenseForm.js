import React from 'react';


class ExpenseForm extends React.Component {
    // we are gonna use local compoennt states to track the user input
    state = {
        description: '',
        note: '',
        amount: '',
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
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

    render() {
        return (
            <div>
                Expense Form
                <form>
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