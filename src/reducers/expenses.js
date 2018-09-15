// Expenses Reducer

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
export default expensesReducer;