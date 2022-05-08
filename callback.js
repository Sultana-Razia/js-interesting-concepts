/* function welcomeMessage(name) {
    console.log(name);
}
const name = 'Tom Hanks';
welcomeMessage(name);
const names = ['Tom hanks', 'Tom Brady', 'Tom Cruise'];
welcomeMessage(names); */

function welcomeMessages(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
function greetMorning(name) {
    console.log('Good Mornring', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}

welcomeMessages('Tom Hanks', greetMorning);
welcomeMessages('Tom Brady', greetEvening);