//For of Loop

/*
    * For of loops iterates over property values NOT the properties themselves like for in loops

    * For that reason, better suited for arrays and strings when values are needed.

    * Does not allow you to grab indices 
    
    for (iterate of iterable) {
        block of code to execute on each iterate run
    }

*/

let classMates = ["Kayce", "Alex", "Jessica", "Freya", "Jacob"];

for(students of classMates) {
    console.log(students);
}

let myText = "This is my sample text";

for (letter of myText) {
    console.log(letter);
}

let person = {
    name: "Marshall",
    age: 23
}

//Will print out that person is not iterable
for (i of person) {
    console.log(i);
}