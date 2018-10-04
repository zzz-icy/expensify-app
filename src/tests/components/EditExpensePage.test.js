import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests.js";
import toJSON from 'enzyme-to-json';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, startRemoveExpense;
// each test can then just focus on using them. also these three become resuable
beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        editExpense={editExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[2]}
    />);

});


test('should render EditExpensePage correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);   // here is not a user action, no simulate
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');

});

test('should handle onClick', () => {
    wrapper.find('button').simulate('click');   // here is a user action, need to simulate
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
    expect(history.push).toHaveBeenLastCalledWith('/');

});

