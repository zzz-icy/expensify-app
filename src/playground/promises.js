// a promise can either be resolved or rejected, can be and , and each only once
// another call to resolve('This is my another resolved data.'); // will be ignored


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'hannah',
        //     age: 28
        // });
        reject('Something went wrong!');  // without .catch(), will get javascript error: uncaught(in promise) something went wrong
    }, 1500)
})
console.log('before');

// we will not really see the code implementation above, it is already implemented in the library we are using, eg. firebase, we just attach handlers

// .then()  register a callback, the callback will be fired when/if the promise resolves
promise.then((data) => {  // take the data that resolves
    console.log('1', data); // call me when data is ready
    return 'haha'
}).then((str) => (console.log(str))) // the second does not have access to the data but the returned data from the 1st .then
    .catch((error) => {
        console.log(error);
    });

// .then can take two arguments, two functions, the 2nd will be treated as the catch() call
// promise.then((data) => {
//     console.log('1', data);
// }, (error) => {
//     console.log(error);
// });


// promise.then((data) => {  // take the data that resolves
//     console.log('2', data);
// });
console.log('after');

// we got before
// after
// This is my resolved data.