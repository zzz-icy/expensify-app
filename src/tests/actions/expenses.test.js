// import the function to be tested
// test file will run through babel set up, so wecan use ES6 import
// command: yarn test -- --watch   (--watch is for test not for yarn)
// jest Global, no need to require or import to use the global methods
// expect has its own page 
// test(name, fn, timeout)
// Also under the alias: it(name, fn, timeout)

// The first argument is the test name; the second argument is a function that contains the expectations to test. The third argument (optional) is timeout (in milliseconds) for specifying how long to wait before aborting. Note: The default timeout is 5 seconds.
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';
import "../setupTests.js";

const createMockStore = configureStore([thunk]); // pass in an array of middlewares

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    //Use .toEqual to compare recursively all properties of object instances (also known as "deep" equality). It calls Object.is to compare primitive values, which is even better for testing than === strict equality operator.
    // object, array -- toEqual
    //boolean, string,number -- toBe
    // {} === {}   false
    // [] === []   false
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('shoule setup edit expense action object', () => {
    const action = editExpense('123abc', { amount: 10 });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: 10
        }
    });
});

// test('should setup add expense action object with provided values', () => {
//     const expenseData = {
//         description: 'rent',
//         note: 'July',
//         amount: 1122,
//         createdAt: 1000
//     };
//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             // id is dynamic
//             // we can use expect.any(constructor)
//             // we only care the is is string
//             id: expect.any(String),
//         }
//     });
// });

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    });
});

test('should add expense to database and store', () => {
    // have to create a mock redux store
    // what do we care
    // 1. the action was correctly dipatched
    // 2. the database was successfully updated


    // The simplest usecase is for synchronous actions. In this example, we will test if the addTodo action returns the right payload. redux-mock-store saves all the dispatched actions inside the store instance. You can get all the actions by calling store.getActions(). Finally, you can use any assertion library to test the payload.

    const store = createMockStore({});
    // no id here
    const expenseData = {
        decription: 'Book',
        amount: 3000,
        note: 'deserve reading',
        createdAt: 1000
    }
    // when we are working with asynchronous test case, we have to tell jest a given test is asynchronous
    // if we do not do that, jest will not wait, everything will pass
    // need to force jest to wait until certain amount of time, call .done()
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        // 2. fetch data from database to see if it is corrctly saved there
        // can be refactored using promise chainning, return the following
        // so we are returning a promise, and we can attatch a .then()

        // database.ref(`expenses/${action[0].expense.id}`).once('value').then((snapshot) => {
        //     expect(snapshot.val()).toEqual(expenseData);
        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
        // Jest will wait until the done callback is called before finishing the test.
        // If done() is never called, the test will fail, which is what you want to happen.
        // If your code uses promises, there is a simpler way to handle asynchronous tests. Just return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

    });
    // how to test asynchronous, wait everything to finish
});

test('should add expense with default to database and store', () => {
    const store = createMockStore({});
    // no id here
    const expenseDefaults = {
        decription: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });

});

// test('should setup add expense action object with defult values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',

//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//         }
//     });
// });

