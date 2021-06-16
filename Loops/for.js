// For Loop

/*
    * A way to perform mundane, repeatable task quickly. Loops iterate (go over) an iterable (something that can be gone over, such as counting from 0-100)
*/

//Count to 100
// for (let i = 0; i <= 100; i += 1) {
//     console.log(i);
// }

// console.log("-------------------")
// //Loop through characters in a string
// let myString = "Marshall Brown";

// for(let character = 0; character < myString.length; character++) {
//     console.log(myString[character]);
// }

for (let i = 100; i <= 500; i++) {
    if(i % 15 === 0) {
        console.log("Fizz Buzz!");
    }else if(i % 5 === 0) {
        console.log("Buzz");
    }else if(i % 3 === 0) {
        console.log("Fizz");
    }else {
        console.log(i);
    }
}