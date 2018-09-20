// import the function to be tested
// test file will run through babel set up, so wecan use ES6 import
// command: yarn test -- --watch   (--watch is for test not for yarn)
// jest Global, no need to require or import to use the global methods
// expect has its own page 
// test(name, fn, timeout)
// Also under the alias: it(name, fn, timeout)

// The first argument is the test name; the second argument is a function that contains the expectations to test. The third argument (optional) is timeout (in milliseconds) for specifying how long to wait before aborting. Note: The default timeout is 5 seconds.
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: 'July',
        amount: 1122,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            // id is dynamic
            // we can use expect.any(constructor)
            // we only care the is is string
            id: expect.any(String),
        }
    });
});

test('should setup add expense action object with defult values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',

        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        }
    });
});

