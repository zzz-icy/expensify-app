import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import "../setupTests.js";
import toJSON from 'enzyme-to-json';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import filters from '../fixtures/filters';
let setStartDate, setEndDate, sortByDate, sortByAmount, wrapper, setTextFilter;
// each test can then just focus on using them. also these three become resuable
beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setTextFilter={setTextFilter}
        filters={filters[0]}
    />);

});

test('should render ExpenseListFilter correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render ExpenseListFilter correctly with altered data', () => {
    // we do not want to user filters[0], date is undefine, for this test we eangt to change it
    wrapper.setProps({
        filters: filters[1]
    })
    expect(toJSON(wrapper)).toMatchSnapshot();

})

test('shoud handle text change', () => {
    // onChange here is a user action, need silmulate
    const value = 'bills';
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    // to switch to amount first
    wrapper.setProps({
        filters: filters[1]
    })
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();

});

test('should sort by amount', () => {
    // to switch to amount first

    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();

});

test('should handle date change', () => {
    // const startDate = moment(0).add(4, 'years');
    // const endDate = moment(0).add(8, 'years');
    const startDate = filters[1].startDate;
    const endDate = filters[1].endDate;
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });// pay attention to he input format
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('should handle focus change', () => {

    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);// pay attention to he input format
    expect(wrapper.state('calendarFocused')).toBe('endDate');
});