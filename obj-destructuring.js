//Object destructuring

let user = {
    username: "marshlendel",
    is_verified: true
}

let {username, is_verified} = user

console.log(username)

let metadata = {
    title: "Javascript Work",
    translations: [
        {
            local: "fr",
            localization_tags: [],
            last_edit: "2021-05",
            url: "/fr/docts/tools/Scratchpad",
            title: "Javascript truc de trvail"
        }
    ],
    url: "/en-US/docts/tootls/Scratchpad"
}   

let {title: englishTitle, translations: [
    {
        title:localTitle
    }
]
} = metadata

console.log(englishTitle)

//!Challenge 2

let family = {
    familyName: "Niemczyk",
    parents: [
        {name: "Hannah", age: 65},
        {name: "Zbigniew", age: 78}
    ],
    country: ["Germany", "England", "Poland"]
}

let {familyName: lastName, parents:[
    
    {name: momsName}
],
country: [birthHome, ,]
} = family;

console.log(lastName, momsName, birthHome)