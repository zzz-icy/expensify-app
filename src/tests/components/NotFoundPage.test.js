// react-test-renderer
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import "../setupTests.js";
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.

test('should render NotFoundPAge correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();

});
