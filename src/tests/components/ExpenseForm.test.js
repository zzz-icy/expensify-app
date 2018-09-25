import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm';
import "../setupTests.js";
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

// import moment from 'moment';
// import { SingleDatePicker } from 'react-dates';

// createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
// will cause snapshot test failure
// mocking 3rd party library



test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

// how to simulate user actions
// for use of 'simulate', refer to  http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    // should not render the error info
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    // state should change
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    // should render the error info
    expect(toJSON(wrapper)).toMatchSnapshot();

});

test('should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    // to match the 1st input which is for the description
    // Returns a new wrapper that wraps the retrieved node at a given index of the current wrapper.
    // Even though the name would imply this simulates an actual event, .simulate() will in fact target the component's prop based on the event you give it. For example, .simulate('click') will actually get the onClick prop and call it.
    wrapper.find('input').at(0).simulate('change', {  // pass in object
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    // to match the 1st input which is for the description
    // Returns a new wrapper that wraps the retrieved node at a given index of the current wrapper.
    // Even though the name would imply this simulates an actual event, .simulate() will in fact target the component's prop based on the event you give it. For example, .simulate('click') will actually get the onClick prop and call it.
    wrapper.find('textarea').simulate('change', {  // pass in object, const note = e.target.value

        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount with valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { // pass in object
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);

})

test('should not set amount with invalid input', () => {
    const value = '23.5000';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { // pass in object
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');

})
test('should call onSubmit props for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const expense = {
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,  // in cents
        createdAt: expenses[0].createdAt, // we need timeStamp here
    };
    // this time, have valid input passed in
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);// pass data as needed
    // simulate the form submission
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expense);

    // onSubmitSpy();
    // expect(onSubmitSpy)..toHaveBeenCalledWith();
    // .toHaveBeenCalledWith(arg1, arg2, ...)
});

test('should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    // .prop is from enzyme
    // import SingleDatePicker above
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new focus onFocusChange', () => {
    // const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    // .prop is from enzyme
    // import SingleDatePicker above
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true });
    //pay attention to the input format, an object with property of focused
    expect(wrapper.state('calendarFocused')).toBe(true);
});