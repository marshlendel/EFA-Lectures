let list = ["orange", "banana", "oreos"];

console.log(list[1])

console.log("---------------------------")
//!Challenge 1
let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan", "Will", "Anira"]];

console.log(typeof students);  
console.log(students instanceof Array)

console.log(`Hello ${students[6][1]}!`)

console.log("----------------------------------")

let food = ["Pacan pie", "Shrimp", "Quesadilla", "Cheesecake", "Hotdog"]

for (item of food) {
    console.log(item);
}

//!Arrays methods
/*
    * .push() Appends something to end of array

    * .unshift() Adds one or more things to the beginning of array

    * .pop() Removes last thing from array

    * .shift() removes first element of array

    * .splice() position you want to remove, how many items you want to remove, optionally what you want to replace

    * .reverse() Reverses order of array indices
    * .includes() states a true or false if something is included

*/
food.push("Pizza");
console.log(food)

food.splice(1, 1, "Bananas" );
console.log(food)

food.splice(2, 0, "Sweet Potato Pie" ) //Adds sweet tato but doesn't add anything
console.log(food);

food.pop();
console.log(food)

food.shift()

food.unshift("Popcorn", "steak")
console.log(food);

console.log("---------------------------------------")

//!Iterating over Arrays
/*
    * -  for loop
    *  - for of
    *  - for each method (simple way to list out each item in array by passing items as arguments into a function)

*/

let color = ["red", "orange", "yellow"]

color.forEach(color => console.log(color))

//For each with multiple arguments
color.forEach((color, index) => {
    console.log(color);
    console.log(index);

})

//!Challenge 2
console.log("--------------------------------------------")
let favMovies = ["Fellowship of the Ring", "Pulp Fiction", "Avengers: Endgame", "The Godfather"]

favMovies.forEach(favMovies => console.log(favMovies));
console.log("--------------------")
favMovies.push("Jurassic Park");
favMovies.splice(1, 1, "Kill Bill");
favMovies.forEach(favMovies => console.log(favMovies));

//!Challenge 3
console.log("-----------------------------------------------")
let arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array);
arr.reverse()
arr.forEach(num => console.log(num));