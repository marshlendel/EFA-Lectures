//Conditionals

/*
    JS conditionals allows us to make decisions and carry out actions according to these decisions
        - Traditional if; else; and else if statements
        - Ternary operator
        - Switch statement
*/


// if (temp > 100) {
//     console.log("Hot as hell dude!");
// } else if (temp > 80) {
//     console.log("Typical summer day.");
// } else if (temp > 60) {
//     console.log("Spring or fall.");
// }else if (temp < 60) {
//     console.log("That's chilly bruh.");
// } else {
//     console.log("You got enter in a weather dude.");
// }

//Ternary 
let temp = 110;

temp > 100 ? console.log("Hot as hell dude!")
: temp > 80 ? console.log("Typical Summer day")
: temp >= 60 ? console.log("Spring or fall?")
: temp < 60 ? console.log("That's chilly bruh")
: console.log("You gotta into a temperature bro")

//switch

switch(new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday baby");
    case 6:
        console.log("Saturday");
    default:
        console.log("not a day");
}

let fizzNumber = 60;

fizzNumber % 15 === 0 ? console.log("Fizz Buzz")
: fizzNumber % 5 === 0 ? console.log("Buzz")
: fizzNumber % 3 === 0 ? console.log("Fizz")
: console.log(fizzNumber);