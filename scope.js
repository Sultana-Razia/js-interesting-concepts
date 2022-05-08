//local scope
function add(first, second) {
    const result = first + second;
    return result;
}
const sum = add(11, 23);
// console.log(first);

//global scope
const favNum = 27;
console.log(favNum);

//block scope
const number = 15;
if (number > 9) {
    let mood = 'happy';
    console.log(mood);
}
// console.log(mood);

if (number > 9) {
    var mood = 'cranky';
    console.log(mood);
}
console.log(mood);

//hointing
/* for (var i = 0; i < 10; i++) {

}
console.log(i); */

//let const block scope
for (let i = 0; i < 10; i++) {

}
console.log(i);