const x = false;
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}


const y = true;
if (y) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}
/* 
null,undefined,NaN are false
*/
/* any number negetive or positive is truthy
0 is falsy
empty string is falsy
any string including single white space is truthy 
[]{} truthy
*/
const a = 4;
if (a) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

const b = -4;
if (b) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}

const c = 0;
if (c) {
    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}