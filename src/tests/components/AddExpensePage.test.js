import React from 'react';
import { shallow } from 'enzyme';
import "../setupTests.js";
import toJSON from 'enzyme-to-json';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

test('should render AddExpensePage correctly', () => {
    const onSubmitSpy = jest.fn();
    // have to mock the push() method in history object which is a props of the page
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={history} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    const onSubmitSpy = jest.fn();
    // have to mock the push() method in history object which is a props of the page
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0]);

})

