// primitive data types
// 7 types : string, Number,  boolean, null, undefined, Symbol, BigInt (big scienific values)
// examples 
const val = 233;
const val2 = 10.5; // no separation between int and floating point numbers. there are just numbers 

const isLoggedIn = false; 

const temperature = null;

let userEmail; // undefined
// or
userEmail = undefined; 

const Id = Symbol('123') 
const newId = Symbol('123')
console.log(Id == newId)
console.log(Id)
console.log(newId)


const bigNumber = 24425901754912709n
console.log(typeof bigNumber)
/*
    FACT : JavaScript is a dynamically typed language, i.e, data types need not to be declared explicitly.
        This means that initially a variable can be of one data type but can be reassigned to a different data type. Example given below 
*/
// example 
let a = "athak"
console.log(typeof a)
a = 344
console.log(typeof a)


// reference type/non-primitive type 
// Arrays, Objects, Functions
// example 

const heroes = ["IronMan", "Spider man", "Captain America"]// array
console.log(typeof heroes)

const myObj = {
    name: "Athak", 
    id: "24112011267",
    skills: ["C++", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"]
}
let mySkills = myObj.skills
console.log(typeof mySkills)
const myFunction = function(){
    console.log("Hello World");
}// function declaration
console.log(typeof(myFunction)); // function is the object only, name is function
