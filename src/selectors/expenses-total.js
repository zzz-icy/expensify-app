export default (expenses) => {
    // with test in advance, we can refactor with confidence
    // const count = expenses.length;
    // if (count == 0) {
    //     return 0;
    // } else {
    // return expenses.reduce((acc, expense) => (acc + expense.amount), 0);
    return expenses
        .map(expense => expense.amount)
        .reduce((acc, num) => (acc + num), 0);
    // }
}