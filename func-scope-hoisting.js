// Functions

 /*
    Function is a block of code that can take in parameters (door),
    perform an action, and return the result of that action

    There are two types of functions
        * function declaration
        * function expression
        * Arrow functions (kind of)
    
    Functions have a default return statement of undefined unless otherwise specified
 */

    //! Function Declaration
    
    /*  
        Declarations are hoisted. This is their template:
        function functionName(parameter) {
            block of code to be ran
            return statement
        }
    */

        function funcDeclaration() {
            return "This is a function declaration"
        }

        // Function will not run until it is called.
        // Parantheses immediately invoke the function
        //funcDeclaration();

        funcDeclaration();

        let result = funcDeclaration()
        console.log(result);

        //With parameters
        //Parameters act as doors to let arguments inside of the function
        function greetUser(name) {
            return `Hello ${name}`
        }

        let userName1 = "Marshall"
        let userName2 = "Kinsey"
        let userName3 = "Paul"
       console.log(greetUser(userName1))
       console.log(greetUser(userName2))
       console.log(greetUser(userName3))

       console.log("--------------")
       //! Function Expression
       /* 
            Function expression utilizes a variable as a placeholder.
            Function expression is not hoisted
            Anonymous function because it usually doesn't have a name itself

            Can use arrow functions
       */

        let myDog = function(name, breed) {
            console.log(`${name} is a ${breed}`)
        }

        console.log(myDog("Macy", "Welsh corgi"));
        
        console.log("---------")
        
        //! Arrow Function
        /*
            - Introduced in ES6
            - More concise way of writing functions
            - don't need parenthesis if there are 1 or 0 parameters
            - Concise body functions auto return a value
            - Great for callback functions (later). Take less space
        */

        //Concise body function               
        let greeting = (name, age) => console.log(`Hello ${name}, you are ${age} years old`)

        greeting("Marshall", 23)

        // Block  body arrow function

        let sendEmail = (email, name) => {
           return `hello ${name}:
            
            We have been trying to reach you about your car's extended warranty.
            
            Is this email the correct email for you? ${email}
            
            sincerely,
            
            Annoying people`
        }

        console.log(sendEmail("marshlendel@gmail.com", "Marshall"));

        //! Immediately Invoked Function Execution
        //*Probs won't use much
        /*
            Function declarations that have no name and are immediately invoked. This really isn't used haha
        */

            (function () {
            console.log("IIFE")
            })();

            console.log("----")
            // Function return statements
            // Must always return only one value

            function returnFun(x, y) {
                return [x, y] //If you want to return two arguments wrap in array
            }

            console.log(returnFun(2, 5))
console.log("----------------------------")


//Tip challenge
function tipAmount(bill, salesTax, tipPercent) {
    let taxAmount = bill * (salesTax/100)
    let totalBill = bill + taxAmount
    let totalTip = totalBill * (tipPercent/100)
    return totalTip;
}
console.log(tipAmount(100, 7, 20));

console.log("------------------------")

//Capitalize name challenge
let capitalizeName = name => name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();

console.log(capitalizeName("zACH"))




let reverseString = str => {
    let splitString = str.split("");
    let recurseArray = splitString.reverse();
    let reversedString = recurseArray.join("");
    return reversedString
}
function revStr(str) {
    if(str === "") {
        return "";
    }else {
        return revStr(str.substr(1) + str.charAt(0))
    }
}

console.log(revStr("Str"))