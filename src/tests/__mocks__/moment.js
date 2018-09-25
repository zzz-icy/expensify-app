// import moment from 'moment';

// Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky.

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}