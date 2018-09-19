const add = (a, b) => {
    return a + b;
}
// command: yarn test -- --watch   (--watch is for test not for yarn)
// jest Global, no need to require or import to use the global methods
// expect has its own page 
// test(name, fn, timeout)
// Also under the alias: it(name, fn, timeout)

// The first argument is the test name; the second argument is a function that contains the expectations to test. The third argument (optional) is timeout (in milliseconds) for specifying how long to wait before aborting. Note: The default timeout is 5 seconds.

test('should add two numbers', () => {
    const result = add(3, 4);
    // if (result !== 7) {
    //     throw new Error(`You added 4 and 3, the result was ${result}. Expect 7.`);
    // }
    // use jest assertion
    expect(result).toBe(7);

});