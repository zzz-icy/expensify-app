import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expenses values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense', () => {
    const expense = {
        id: '4',
        description: 'insurance',
        note: '',
        amount: 51000,
        createdAt: moment(0).subtract(2, 'days').valueOf(),
    }
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);

})

test('should remove expense by provided id', () => {

    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(state).toEqual([expenses[0], expenses[2]]);

});

test('should not remove expense if id not found', () => {

    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
    expect(state).toEqual(expenses);

})

test('should edit expense by provided id and updates', () => {
    const description = 'updated rent';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { description },
    }
    const state = expensesReducer(expenses, action);
    // expect(state).toEqual([
    //     expenses[0],
    //     {
    //         ...expenses[1],
    //         ...action.updates
    //     },
    //     expenses[2],
    // ]);
    expect(state[1].description).toBe(description); // more precise

});

test('should not edit expense when id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { description: 'updated rent' },
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);

});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);

})




