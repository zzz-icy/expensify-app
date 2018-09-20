import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Finally, you need to configure enzyme to use the adapter you want it to use. To do this, you can use the top level configure(...) API.

Enzyme.configure({
    adapter: new Adapter(),
})