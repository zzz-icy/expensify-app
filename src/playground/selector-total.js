import moment from 'moment';
const expenses = [{
    id: '1',
    description: 'bill',
    note: '',
    amount: 500,
    createdAt: 0,

},
{
    id: '2',
    description: 'rent',
    note: '',
    amount: 50000,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    // because: const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;

},
{
    id: '3',
    description: 'credit',
    note: '',
    amount: 5000,
    createdAt: moment(0).add(4, 'days').valueOf(),

}];

const getExpensesTotal = (expenses) => {
    let i, total;
    const count = expenses.length;
    if (count < 1) {
        return 0;
    } else {
        return expenses.reduce((acc, expense) => (acc + expense.amount), 0);
    }
}
console.log(getExpensesTotal(expenses));