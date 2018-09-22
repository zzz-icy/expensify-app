import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// // Finally, you need to configure enzyme to use the adapter you want it to use. To do this, you can use the top level configure(...) API.

// Enzyme expects an adapter to be configured, but found none. To
//           configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
//           before using any of Enzyme's top level APIs, where `Adapter` is the adapter
//           corresponding to the library currently being tested. For example:

//           import Adapter from 'enzyme-adapter-react-15';


Enzyme.configure({
    adapter: new Adapter()
})