import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import "../setupTests.js";
import toJSON from 'enzyme-to-json';
// import moment from 'moment';
// import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});