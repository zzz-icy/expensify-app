// react-test-renderer
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList'; // we just want the unconnected version
import "../setupTests.js";
import toJSON from 'enzyme-to-json';

import expenses from '../fixtures/expenses';
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.

test('should render expense list properly', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(toJSON(wrapper)).toMatchSnapshot();

});

test('should render expense list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();

})