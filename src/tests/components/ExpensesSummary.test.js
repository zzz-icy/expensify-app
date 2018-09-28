import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import "../setupTests.js";
import expenses from '../fixtures/expenses';

test('should render correctly with 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={100} />)
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render correctly with 1 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={100} />)
    expect(toJSON(wrapper)).toMatchSnapshot();
});