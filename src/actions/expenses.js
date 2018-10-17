// Actions for expenses
// import uuid from 'uuid';
import database from '../firebase/firebase';
// action generators
// ADD-EXPENSE

// export const addExpense = (
//     { description = '', note = '', amount = 0, createdAt = 0 } = {}
// ) => (
//         {
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: uuid(),
//                 description,
//                 note,
//                 amount,
//                 createdAt,
//             }
//         });

// we do not need the id generated by uuid(), will use the id generated by firebase, so rewrite the addExpense

export const addExpense = (expense) => (
    {
        type: 'ADD_EXPENSE',
        expense
    });


export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        // add return so that we can chain .then() in the test
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => { //.then() gets called with the ref, so we have access to the id 
            dispatch(addExpense(
                {
                    id: ref.key,
                    ...expense
                }
            ));
        });
    }
};


// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            // once it is removed from database, dispatch action
            dispatch(removeExpense({ id }));
        });
    }
}
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            // once it is removed from database, dispatch action
            dispatch(editExpense(id, updates));
        });
    }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// 1. fetch all expenses data
// 2. Parse that data into an array, cause data from firebase are nested objects with the id as the key for each expense
// 3. dispatch SET_EXPENSES

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        // add return so that we can chain .then() in the app.js
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            dispatch(setExpenses(expenses));
        });
    }
};