import { createStore, combineReducers } from 'redux';

// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
// The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()

// ADD-EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// two reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action) {
        default:
            return state;
    }
};
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined,

};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action) {
        default:
            return state;
    }
};

// store creation

const store = createStore(
    // register each reducer here
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'sjsjsjsj',
        description: 'Janurary rent',
        note: 'This was the last payment for that address.',
        amount: 54500,
        createdAt: 0,
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined,
    }
}
