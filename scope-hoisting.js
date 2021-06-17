//Scope and Hoisting

/*
    Scope determines how different blocks of code can be accessed.
        *Three types of scope:
            - Global
            - Block or local
            - Function
*/ 

//*Global scope
/*
    Our JS file, or Window Object in terms of browser
    Accessible from every other scope
*/
let x;
console.log(x)
function addOne() {
    x = 1
}
addOne()
console.log(x)

console.log("-----------------------------")

//* function scope
/*
    -Can be accessed inside the function only
    - let is block scope
    - var is function scope
   
*/
function carName() {
    let name = "Maserati"
    var model = "GranTurismo"
    //what is in the if statement is block scope
    if(true) {
        let year = 2013
    }
}

carName()

//! Let/Const vs Var
/*
    - Let is scoped to the immediate enclosing block of code
    - Var is hoisted and scoped to the immediate function block
*/

//!Hoisting
/*
    JS is an interpreted language that is being read top to bottom and left to right. The parser, which reads the code, goes over it twice.
    - First, to hoist or assign memory location to ALL Var variables declarations as well as Function Declarations
    - During the second pass, the interpreter actually reads the initialization values and expressions that we have assigned and executes our code.
*/

console.log("-------------------")

var cheese;
console.log(cheese)
var cheese = "gouda"

// Hoisting and Function Declaration vs Function Expression


helloWorld() //Invoking the function before it's declared works because function declarations are hoisted
function helloWorld() {
    console.log("Hello world from the hoisting side - Adele")
}

// helloWorld()
addNums(5, 4)

let addNums = function(x, y) {
    console.log(x + y)
}

//?map() allows you to use array values and pass them into function variables