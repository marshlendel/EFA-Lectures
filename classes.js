//! Classes

/*
    Templates for creating objects. They encapsulate data with code. JS is a heavily-prototype based OOP

    Classes are considered special functions and therefore can be defined as:
        - Class Expression
        - Class Declaration
*/

//!Class Declaration
//Class name should always be capitalized

class Teacher {
    //constructor - a class method for creating and initialization of a class object. Where we say we want our class to be constructed with.

    //this refers to the object it belongs to, like a placeholder

    constructor(name, subject, tenure, isPolyglot) {
        this.name = name;
        this.subject = subject;
        this.tenure = tenure;
        this.isPolyglot = isPolyglot;
    }
}

    //Instantiating a Class Declaration

    let Brown = new Teacher("Marshall", "Coding", 0, true)
    console.log(Brown)

    //! Class Expression

    let House = class {
        constructor(address, bedrooms, bathrooms) {
            this.address = address
            this.bedrooms = bedrooms
            this.bathrooms = bathrooms
        }
    }

    let myHouse = new House("6774 W Odessa Way", 3, 3)
    console.log(myHouse)

    //!Class Methods
    /*
        Method is a function that lives inside of a class that can be reused on any class instances
    */

        class Car {
            constructor(make, model, year, transmission) {
                this.make = make;
                this.model = model;
                this.year = year;
                this.transmission = transmission;
            }

            // Method
            greetDriver() {
                console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
            }

            age(currentYear) {
                return currentYear - this.year;
            }
        }

        let mustang = new Car("Ford", "Mustang", 2016, "manual")
        
        mustang.greetDriver()
        console.log(mustang.age(2021))

        console.log("-------------")

        //!Challenge 1

        class Avengers {
            constructor(name, superpower, age, isDead, keyMovie){
                this.name = name
                this.superpower = superpower
                this.age = age
                this.isDead = isDead
                this.keyMovie = keyMovie
            }

            starredIn() {
                console.log(`${this.name}'s key movie was ${this.keyMovie}`)
            }

            whichTeam() {
                let teamIronMan = ["Iron Man", "Tony Stark", "Vision", "Black Panther", "Ant-Man", "Black Widow", "War Machine", "spider-Man"]

                let teamCap = ["Captain America", "Steve Rogers", "Winter soldier", "Falcon", "Scarlet Witch", "Ant-Man", "Hawkeye"]

                if (teamCap.includes(this.name)) {
                    return `${this.name} is in Team Cap!`
                }else if(teamIronMan.includes(this.name)) {
                    return `${this.name} is in Team Iron Man!`
                }else {
                    return `They ain't in any of the teams!`
                }
            }
        }

let cap = new Avengers("Steve Rogers", "super serum", 100, false, "Winter Soldier")

let ironMan = new Avengers("Tony Stark", "suit", 46, true, "Iron Man 1")

console.log(ironMan.whichTeam())
console.log(ironMan.starredIn())
console.log("------------------------------")

//!Inheritance

class Options extends Car {
    constructor(make, model, year, transmission, isLeather, isComfortAccess, wheelsPowered) {
        //Put in super the things you are inheriting
        super(make, model , year, transmission)
        this.isLeather = isLeather;
        this.isComfortAccess = isComfortAccess;
        this.wheelsPowered = wheelsPowered;
    }

    isCPO(currentYear) {
        let result = currentYear - this.year;
       return result >= 6 ? `Your ${this.model} is out of warranty` :
        `Your warranty is still good.`
    }
}

let bmw = new Options("BMW", "M5", 2010, "DCT", true, true, "RWD")
console.log(bmw.age(2021))

console.log(bmw.isCPO(2021))
console.log("------------------------")

//! Challenge 3
class Sale extends House {
    constructor(address, bedrooms, bathrooms, appraisalValue, listPrice, agent, isListed) {
    super(address, bedrooms, bathrooms)
    this.appraisalValue = appraisalValue;
    this.listPrice = listPrice;
    this.agent = agent;
    this.isListed = isListed;
  }

  difference() {
    let valueDifference =   this.listPrice - this.appraisalValue;
    
    if(this.listPrice > this.appraisalValue*1.2) {
        console.log("It isn't worth it")
    }else if(this.listPrice <= this.appraisalValue*1.2) {
        console.log("It's a good deal")
    }
    return `The difference is $${valueDifference} dollars`
  }
}

let listing = new Sale("5832 N Avenue", 2, 4, 120000, 90000, "Ryan Serhant", true);
console.log(listing)

let listing2 = new Sale("whatever", 2, 2, 2500000, 3000000, "bob", true)

console.log(listing2.difference())