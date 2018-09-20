import moment from 'moment';
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
}
    from '../../actions/filters';

test('should setup sort by amount action object ', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('should setup sort by date action object ', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('should setup set start date action object ', () => {
    const startDate = moment();
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate,
    });
});
test('should setup set end date action object ', () => {
    const endDate = moment();
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate,
    });
});

test('should setup SET_TEXT_FILTER action object with provided value', () => {
    const text = 'bill';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        // text: text,
        // use ES6 shorthand
        text
    });
});

test('should setup SET_TEXT_FILTER action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});
