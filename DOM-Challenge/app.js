
let button = document.querySelector("button");

// button.addEventListener("click", e => {
//     let number1 = document.querySelector("#number1").value;
//     let number2 = document.querySelector("#number2").value
//     let sumHeading = document.createElement("h2");
//     let sum = Number(number1) + Number(number2);
//     sumHeading.innerText = sum;
//     document.querySelector("body").appendChild(sumHeading);
// })


//With onclick instead of addEventListener
button.onclick = e => {
    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value
    let sumHeading = document.createElement("h2");
    let sum = Number(number1) + Number(number2);
    sumHeading.innerText = sum;
    document.querySelector("body").appendChild(sumHeading);
}