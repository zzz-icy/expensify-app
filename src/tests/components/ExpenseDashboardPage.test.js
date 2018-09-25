// react-test-renderer
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import "../setupTests.js";
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();

});
