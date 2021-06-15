//data types

/*
    There are six primitive data types in JS
    -String
    -number
    -boolean
    -null
*/

// String

let myString = 'this is a string';
// Can use "". ''. or `` to encompass your string. Just be consistent
console.log(myString)

//Template literal or template string
/*
    -Utilizes back ticks ` ` to allow us to container placeholders
*/

let firstName = "Paul";
console.log(`Hello my name is ${firstName}`)

//Print line on multiple lines
let longString = "This is a long string \n and I would like it on multiple lines.";

console.log(longString);

//Literals
//Hardcoded values

let literalString = "Literal string";
console.log(literalString);

//Can also be created by casting data types using constructors
let constrLiteralStr = String("string is constructed");
console.log(constrLiteralStr);

//Numbers

let degree = 90;
console.log(degree);

let rounded = 0.2 + 0.1
console.log(rounded) //Double precision 64bit in coding makes number have lots of decimal places

//Booleans

/*
    True or False values
    - booleans have six primitive falsey values
    - 0 
    - Empty string " "
    - false
    - undefined
    - NaN
    - Any other value in JS is considered truthy
*/

let trueValue = true
console.log(trueValue);