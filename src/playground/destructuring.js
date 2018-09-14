// object destructuring
//
const person = {
    name: 'Andrew',
    age: 26,
    location: {
        cityName: 'Philadelphia',
        temp: 92

    }
};
// when we object-destructuring, we can set up default, the 'Anonymous' here is the default value for name
const { name: firstName = 'Anonymous', age } = person; // rename and set default

const { cityName, temp: temperature } = person.location; // rename
if (city && temperature) {
    console.log(`${cityName} is ${age}.`);

}
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

// array destructuring
//

const address = ['8727 Southwestern Blvd', 'Dallas', 'Texas', '75206'];

const [street, city, state, zip] = address;
// const [street, city, state] = address; // just the first 3 elements in the array
// const [, city, state] = address; // just the 2nd and 3rd element in the array
// const [, , state] = address // just the 3rd
// rename here is easy
// default value, or it is undefine
// const [, , state = 'New York'] = address // just the 3rd

// console.log(`you are in ${address[1]}, ${address[2]}`);
console.log(`you are in ${city}, ${state}.`);  // match up by position


