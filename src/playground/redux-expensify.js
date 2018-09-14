import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
// The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()

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
// action generators
// ADD-EXPENSE
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => (
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt,
            }
        });
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// two reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // we dont want to manipulate directly on states, we read off of that
            // state.push(action.expense); 
            // return state.concat(action.expense); // will return a new arrary, also work
            return [...state, action.expense]; // array spread operater
        case 'REMOVE_EXPENSE':
            // filter() creates a new array with elements that fall under a given criteria from an existing array.The item argument is a reference to the current element in the array as filter() checks it against the condition. This is useful for accessing properties, in the case of objects.
            // If the current item passes the condition, it gets sent to the new array.
            // return state.filter((item) => (item.id !== action.id));

            // !!!!!! we can deconstruture this, item here us not necessary actually
            return state.filter(({ id }) => (id !== action.id));
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
store.subscribe((() => {
    console.log(store.getState());
}));
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 })); // will return the action object
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 100 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));


