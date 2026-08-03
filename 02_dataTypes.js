"use strict"; // treat all JS code as newer version of JS

//alert(3 + 3); // this will give an error statement because this alert is nor defined in strict mode. However can be used in browser or when binded with html pages. 

console.log(3
     +
     3) // bad code readability, will work fine, but not readable, so avoid this kind of code writing

console.log("athak ramgir")

// data types ecma

var name = "athak" // string
let age = 20 // number
let isLoggedIn = true // boolean

// number => 2 to power 53 
// bigint
// string => ""
// boolean => true/false
// null => standalone value; let accountNumber = null; => this is defined and null 
// undefined => let accountNumber; -> undefined, value has not been assigned
// symbol => will be used in react, to uniquely identify individual components


// object

console.log(typeof "string") // this will give the type to be string
console.log(typeof null) // type comes out to be an object
console.log(typeof undefined)// type comes out to be undefined