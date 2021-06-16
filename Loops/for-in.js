//For in Loop

/*
    *For in loops work by looping over enumerable (able to be counted) property names of an object

    for (iterate in iterable) {
        code block to execute over each iterate
 
    }

    ! Likes to work with numbers (enumerable) things
    ! Works well with objects, because the properties/keys are technically enumerable but they have words attached to them

    *have to specify you what value you want, so the i in what

    *Cleaner than plain for loops when working with numbers and stuff
*/

console.log("---------------")

let teacher = "Paul Niemczyk";
let randomNums = [5, 3, 9, 8];

let person = {
    name: "Marshall",
    age: 23,
}

// for (i in teacher) {
//     //(i - enumerable, teacher[i] - Objects of enumerables)
//     console.log(i, teacher[i]);
// }

for (property in person) {
    console.log(property, person[property]);
}