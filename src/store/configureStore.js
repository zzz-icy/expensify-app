// store creation
import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// will do the following in the app.js
// const store = configureStore();

export default () => {
    const store = createStore(
        // register each reducer here
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
        })
    );
    return store;
};




// timestamps(milliseconds)
// Janurary 1st 1970 (unix epoch)
// 33400  33400 milliseconds after the unix epoch