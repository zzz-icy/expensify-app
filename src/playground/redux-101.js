import { createStore, bindActionCreators } from 'redux';

// const add = (data) => {
//     return data.a + data.b;
// }
// deconstructuring
// const add = ({ a, b }) => {
//     return a + b;
// }
// console.log(add({ a: 1, b: 2 }));


// action generators, function that return action objects, prefered
// const incrementCount = (payload = {}) => ({
//     // need to set the default value for payload as {}, or accessing the property of undefined will throw error
//     type: 'INCREMENT',
//     incrementBy: ((typeof payload.incrementBy) === 'number') ? payload.incrementBy : 1,
// });
// deconstructuring

// Data validation is ideally handled in the component and not in an action. It may not make sense now, but once you've ingreated Redux into React it'll become more apparent why it was removed.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const store = createStore((state = { count: 0 }, action) => {
    // console.log('running...');
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = ((typeof action.incrementBy) === 'number') ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy, // use the state value, compute new value and return
            };
        case 'DECREMENT':
            const decrementBy = ((typeof action.decrementBy) === 'number') ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy, // use the state value, compute new value and return
            };
        case 'RESET':
            return {
                count: 0, // use the state value, compute new value and return
            };
        case 'SET':
            return {
                count: action.count,
            }
        default:
            return state;


    }

});
// everytime do something when the states change
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

});
// subscribe will return the unsucscribe

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));


