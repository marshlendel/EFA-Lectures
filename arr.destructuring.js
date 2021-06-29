//Array Destructuing & Spread Operator

//! Spread Operator
/*
    Spread operator pulls out all elements of an array and gives you a standalone list of them

        *Donated by ...
        * Must be inserted into a new array [...]
        * Spread operator unpacks the values from one array or object into another
        * To destructure and individual array, use the index [..arr[0]]
        * The temporary (copied) unpacked arr doesn't affect the original


*/

let fullName = ["Marshall", "Brown"]


// This causes fullName array to be nested inside of a tempArr array
// let tempArr = [fullName]

let tempArr = [...fullName]

console.log(tempArr)

//We can use multiple spread operators to unpack multiple arrays into a new array,

let birthPlace = ["Indianapolis", "Indiana"]

let nameBirth = [...fullName, ...birthPlace]
console.log(nameBirth)

//! .. & Numbers

console.log(Math.min(1, 4, -3))

let prices = [20, 40.99, 47.1, 90]

console.log(Math.min(...prices))

//! .. &  Objects

let persons = [{name: "Marshall", age:23}, {name: "Anne", age:20}]
console.log(persons)
let copiedPersons = [...persons]
console.log(copiedPersons)

persons.push({name: "Freya", age:21})
console.log(persons)
console.log("---------------------")
console.log(copiedPersons)

/*
    !Javascript has 5 primitive data types:
    * boolean
    * null
    * String
    * Number
    * Undefined
    These data types are assigned to a value

    Three data types are passed by reference"
    * array
    * function
    * object
    Non-primitive data types contain a reference to a value. The reference points to the objects in memory. Variables don't contain the value

    Any changes we make to an array that is referenced by more than one variables, when modified accesses the reference value in memory. For that reason any changes made to either persons or copiedPersons will be reflected in its counter part
*/

let x = 10; //MEMORY: Varaible x value 10

let y = "abc"; //MEMOERY: Variable y value "abc"

let arr = [] // Creates an array in memory. Arr receives not the array, but the address location of that array somewhere in memory

arr.push(1)

/*
    VARIABLE    VALUE       ADDRESS   OBJECT
    arr         <#001>      #001        [1]

*/

//!How do we avoid changing original and copied?
//Make sure to return new objects with their own memory space so you could use the map() callback functions


//*For arrays
let newPersons = persons.map(person => ({ //Added parenthesis so it would know the curly braces are to make an object not for a body function
    name: person.name,
    age: person.age
}))


//*For objects

// let copiedObject = new Object(`name of object you wanna copy`)

//easier way to do it, just use spread operator

// copiedObject = {...nameOfObject}

console.log("---------------------------------")

//!Array Destructuring

/*
    Array destructuring allows you to unpack values from arrays,  or properties from objects into distinct variables
        * Similar syntax as array literal
        *Left hand side of assignment operator
        * Used to unpack array/object into distinct variables
        * 
*/

let cities = ["Boston", "New York", "Chicago", "LA" ]

/*Not really an array, but a quick way to unpack values from an array

So JS unpacks the values from cities array and assigns each value its own variable based on their original position in an array

*/

let [boston, newYork, chicago, la] = cities

console.log(newYork)

console.log("-------------------")

//!Rest Syntax

/*
    Rest looks just like spread. Spread expands an array, rest collects multiple elements and condenses them into one
*/

let cars = ["Porsche", "BMW", "Maserati", "Aston Martin", {transmission: "manual", year: 2012, wheelsDriven: "rwd"}]

let [porsche, bmw, ...otherInfo] = cars

//otherInfo becomes an array of the rest of the elements of cards
console.log(otherInfo)

//How to skip values using rest operator. Use commas
//Rest operator must be the last operator defined

let [brand, , , , ...features] = cars
console.log(brand, features)

console.log("------------------")

//!Challenge 1

let statesVisited = ["Indiana", "Tennessee", "Kentucky", "California", "Arizona"]

let statesCountries = [...statesVisited]

statesCountries.push("America", "Canada", "France");

let [indiana, tennessee, kentucky, california, arizona, ...countries] = statesCountries

