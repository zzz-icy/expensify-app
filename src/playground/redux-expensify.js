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
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
// SET_START_DATE
const setStartDate = (startDate) => ({ // default value is undefined, so no need to set here
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

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
        case 'EDIT_EXPENSE':
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item, // we need to use object item, no need to deconstruture here
                        ...action.updates // overwrite the old amount value
                    };
                } else {
                    return item;
                }
            })
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
// remember you pass filtersReducerDefaultState expensesReducerDefaultState 
//  one is array the other is object. 
// it doesn't matter if it has the same field with the same name
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
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
// timestamps(milliseconds)
// Janurary 1st 1970 (unix epoch)
// 33400  33400 milliseconds after the unix epoch

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter(
        (item) => {
            const startDateMatch = typeof startDate !== 'number' || item.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || item.createdAt <= endDate;
            const textMatch = item.description.toLowerCase().includes(text.toLowerCase());

            // figure out if expenses.description as the text variable string inside of it
            // includes, The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
            // convert both string to lower case

            // sort, in place and retur nthe array
            // sort(compareFunction(a,b)) 
            // return 1, b to lower index
            // return 0, unchanged
            // return -1, a to lower index
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            return startDateMatch && endDateMatch && textMatch;

        }
    ).sort(
        (a, b) => {
            if (sortBy === 'date') {
                return (a.createdAt < b.createdAt) ? 1 : -1;// latest date first
            }
            if (sortBy === 'amount') {
                return (a.amount < b.amount) ? 1 : -1; // higher amount first
            }
        }
    );
};


store.subscribe((() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
}));
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 150, createdAt: -10000 })); // will return the action object
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 100, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));


// store.dispatch(setStartDate(0));

// store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());
store.dispatch(sortByDate());
// store.dispatch(sortByAmount());






// object spread operator

// const user = {
//     age: 24,
//     name: 'Jen'
// };

// console.log(
//     {
//         age: 27,
//         ...user,
//         location: 'New York'
//     }
// );

// // {age: 24, name: "Jen", location: "New York"}
// // age is still 24

// console.log(
//     {
//         ...user,
//         location: 'New York',
//         age: 27,
//     }
// );

// // {age: 27, name: "Jen", location: "New York"}
// // ...user will be overwrriten
// so if we want overwrite, put it after the object spread operator