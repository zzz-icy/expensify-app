// react-test-renderer
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage'; //unconnected version
import toJSON from 'enzyme-to-json';

import "../setupTests.js";

test('should loading page correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // This ensures that a value matches the most recent snapshot. 
    // first time create one, second time check if the same as snapshot
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // ------use enzyme--------

    const wrapper = shallow(<LoadingPage />);
    // Finds every node in the render tree of the current wrapper that matches the provided selector.
    // css selector
    expect(toJSON(wrapper)).toMatchSnapshot();
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');

});