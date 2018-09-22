// react-test-renderer
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem'; // we just want the unconnected version
import "../setupTests.js";
import expenses from '../fixtures/expenses';
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.
test('should render expense list item properly', () => {
    const wrapper = shallow(<ExpenseListItem data={expenses[0]} key={expenses[0].id} />);
    expect(wrapper).toMatchSnapshot();

});