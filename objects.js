let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

//Logging all the data
console.log(netflix)
console.log("---------------------------")
//Log the season info
console.log(netflix.season1.seasonInfo)
//Log episode name: Alliance
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName)
console.log("----------------------------")
//!Challenge 1
let episodeNumber = netflix.season1.seasonInfo.episodeInfo[4].episode
let episodeName = netflix.season1.seasonInfo.episodeInfo[4].episodeName

console.log(`Episode number: ${episodeNumber}`);
console.log(`Episode name: ${episodeName}`);

//!JSON Objects
/*
    - JavaScript Object Notation
    - When you pull information from API, most info is stored via JSON
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//*Object methods
/*
    .keys()
    .values()
*/
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck));

console.log(Object.values(spaceJam.toonSquad));

console.log("-------------------------------")

//Good practice when making an objects is to have no spaces in keys, but if they have spaces you gotta make it a string, and to access it you have to use brackets, not dot notation