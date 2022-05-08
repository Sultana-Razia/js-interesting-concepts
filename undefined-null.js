/* 
1.variable value not assigned
2.function didn't return anything
3.parameter isn't passed
4.property doesn't exist in an object
5.accessing array element out of range;
6.accessing array element out of range
7.explicitly set value to ubdefined
*/
let first;
console.log(first);

function second(x, y) {
    const sum = x + y;
}
const result = second(3, 4);
console.log(result);

function add(a, b) {
    const sum = a + b;
    return;
}
const third = add(3, 4);
console.log(third);

function double(a, b) {
    const result = a * 2;
    console.log(b);
    return result;
}
double(81);

const fifth = { name: 'sogir', age: '15', location: 'bandarban' };
console.log(fifth.phone);

const sixth = [23, 45, 67, 3];
console.log(sixth[4]);

const seventh = undefined;
console.log(seventh);

const myObject = { name: 'samad', profession: null };
console.log(myObject);