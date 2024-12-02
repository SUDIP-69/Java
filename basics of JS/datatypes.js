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

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

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