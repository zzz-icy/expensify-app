// react-test-renderer
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow'; // ES6
import Header from '../../components/Header';

// shallow rendering a opposed to full dom rendering(also render child component)

test('should render header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    // This ensures that a value matches the most recent snapshot. 
    // first time create one, second time check if the same as snapshot
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});


