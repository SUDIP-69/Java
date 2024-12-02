"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

/*console.log(3 
    +
     3) // code readability should be high

 console.log("sudip")*/


let name = "sudip"
let age = 23
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

/*
console.log(typeof undefined); // undefined
console.log(typeof null); // object
*/

//  +++++++++++++++++++++++++++++++++++++++++++++ Primitive ++++++++++++++++++++++++++++++++++

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3456543576654356754n



// ++++++++++++++++++++++++++++++++ Reference (Non primitive) ++++++++++++++++++++++++++++++++++++++++

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sudip",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(id === anotherId);
console.log(typeof anotherId);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof userEmail);
console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Stack(Primitive goes here) ...................... Heap(Non-Primitive goes here)
*/

let gameName = "Merlin"
let anotherName = gameName      // another space is created in the stack memory; the value in the gameName variable doesn't change on re-assigning anotherName variable with a new value as the value of gameName was just copied

let user1 = {
    email: "sudip2311@gmail.com",
    password: "sudip2311",
    userId: 21224,
}

console.log(user1);

let user2 = user1
user2.password = "asdf1234"

console.log(user1); //the user object is created in heap and is accessed by both user1, user2 so any change made in user2 is reflected in user1 also
console.log(user2);

let value=42
value="sudip"
console.log(typeof value)
