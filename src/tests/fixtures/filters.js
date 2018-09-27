import moment from 'moment';

const filters = [
    {
        text: 'bill',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined,
    },
    {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: moment(0).startOf('month'),
        endDate: moment(0).endOf('month'),
    },
    {
        text: '',
        sortBy: 'amount', // date or amount
        startDate: moment(0).add(100, 'days').startOf('month'),
        endDate: moment(0).add(100, 'days').endOf('month'),
    }
];
export default filters;
