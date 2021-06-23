//Comments
/*
    -Communicate with other developers what out code does.
- Annotate sections of code
-Good to have, but too many comments makes the code messy.
- Single line comments created using //
- Multi-line comments created using /*

*/

/*
    - Better comments extension for VScode allows you to:
    * Create a note utilizing asterisk
    ! Something important can be shown using an exclamation mar
    ? use question mark for any information you need to circle back to.

    */

 
    for(let i = 0; i <= 100; i++) {
        if(i % 48 === 0) {
      console.log('Fizz Buzz')
       } else if(i % 8 === 0) {
      console.log('Buzz');
     } else if (i % 6 === 0) {
      console.log('Fizz')
     } else {
      console.log(i);
    }
  };
  

// for(let i = 0; i <= 100; i++) {
//     if(i % 24 === 0) {
//         console.log("Fizz buzz")
//     } else if(i % 8 === 0) {
//         console.log("Buzz")
//     } else if (i % 6) {
//         console.log("Fizz")
//     } else {
//         console.log(i)
//     }
// } 
    