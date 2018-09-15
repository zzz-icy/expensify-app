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

export default getVisibleExpenses;