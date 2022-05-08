/* 
Data Types
>Primitive data type
1.Number
2.String
3.boolean
4.undefined
5.null
7.symbol 
>non-primitive data type
6.object
*/

let a = 'hello';
let b = a;
console.log(a, b);
a = 'hi';
console.log(a, b);

const x = { job: 'web developer' };
const y = x;
console.log(x, y);
// x.job = 'front end developer';
y.job = 'back end developer';
console.log(x, y);
