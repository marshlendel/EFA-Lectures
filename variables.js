// Variables

/*

    - Primitive data type which can hold any type of value (object)
    - Begin with a declaration and can have values assigned, but not necessary;
    - Declarations are case-sensitive
    - Preferable variable naming convention is camelCase
    - Can't begin with number. Can begin with _ or $ << used for AJAX (which is old way, can do fetch now)
*/

let student; //Variable declaration
//New keyboard introduced with ES6
console.log(student); 

student = "Jessica"; //Assigned string value to variable student

let homework = "Never"; //Var declaration of homework with str value of "never"

var teacher; //Variable declaration
// Old keyword. Causes lots of headaches with scope and hoisting

const classroom = "web Dev"; //Variable declaration
//Declares a variable that may not be reassigned
//Cannot be declared with undefined. Must have value attached

console.log(classroom);