// react-test-renderer
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import LoginPage from '../../components/LoginPage'; // we just want the unconnected version
import "../setupTests.js";
import toJSON from 'enzyme-to-json';

test('should render LoginPage properly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();

});
