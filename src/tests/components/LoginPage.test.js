// react-test-renderer
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import "../setupTests.js";
import toJSON from 'enzyme-to-json';

test('should render LoginPage properly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => { }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();

});

test('should call startLogin with button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);

    wrapper.find('button').simulate('click'); // user action needs simulate
    expect(startLogin).toHaveBeenCalled();

})
