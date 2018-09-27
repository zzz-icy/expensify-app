import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// TTD test driven development

test('should return 0 if no expense', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
})

test('should correctly add up one single expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    // input should be an array
    expect(total).toBe(600);

})

test('should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(55600);

})