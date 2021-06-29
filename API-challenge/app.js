


document.querySelector("button").addEventListener("click", () => {
    document.querySelector("h1").innerHTML = "<em>Loading dog...</em>"
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(json => {
        document.querySelector("h1").innerText = json.message.slice(30, json.message.lastIndexOf("/"))
        document.querySelector("img").setAttribute("src", json.message)
    })
})
