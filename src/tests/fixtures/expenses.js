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

export default expenses;