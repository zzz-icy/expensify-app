// react-test-renderer
import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import { Header } from '../../components/Header'; //unconnected version
import "../setupTests.js";
// Convert Enzyme wrappers to a format compatible with Jest snapshot testing.


// As of Enzyme v3, the shallow API does call React lifecycle methods such as componentDidMount and componentDidUpdate
// shallow rendering a opposed to full dom rendering(also render child component)

test('should render header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // This ensures that a value matches the most recent snapshot. 
    // first time create one, second time check if the same as snapshot
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // ------use enzyme--------
    const wrapper = shallow(<Header />);
    // Finds every node in the render tree of the current wrapper that matches the provided selector.
    // css selector
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');

});

test('should dispatch startLogout when click button', () => {

})


