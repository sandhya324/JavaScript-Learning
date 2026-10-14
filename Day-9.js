// topic: Scope, Hoisting & Execution Context


// Q1 — Predict the output
// var x = 10;

// function test() {
//     var x = 20;
//     console.log(x);
// }
// test();
// console.log(x);

//Output:
// 20
// 10





// Q2 — Predict the output
let x = 10;

{
    let x = 20;
    console.log(x);
}

console.log(x);

// Output:
// 20
// 10




// Q3 — What happens?
console.log(a);
var a = 50;

// ans: a is in a Temporal dead zone and it will give a ReferenceError



// Q4 — What happens?
console.log(a);
let a = 50;

// ans: a is in a Temporal dead zone and it will give a ReferenceError

// Explain the difference between Q3 and Q4.
// ans : difference is let has a function scope and var has a block scope. but both are in TDZ so it will give ReferenceError





// Q5 — Predict the output
function greet() {
    console.log("Hello");
}

greet();
// output:
Hello



// Then change it to:
greet();

function greet() {
    console.log("Hello");
}
Output:
 Hello 

// Does it still work? Why?
// Ans: because greet() is Hoisted that make it accessible before declaration




// Q6 — Find the output
let a = 10;

function outer() {

    let b = 20;

    function inner() {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}

outer();

// Draw the scope chain yourself.
// 1. first js will called outer function.
// 2. Inside outer function js will called inner()
// 3. inside inner() c is declared but it will print a that is 10 
// 4. then it will print b that is 20 
// 5. then it will print c that is 30 