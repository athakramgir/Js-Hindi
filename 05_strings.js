let name = "athak ramgir"
let repoCount = 4
//outdated practice 
console.log(name + repoCount + " yeah that's it") // this works but in modern programming below syntax works better

console.log(`Hello My name is ${name} and i have a repo count of ${repoCount}.`); // more used in modern programming (more readable) modern way called as "String Intrapolation"

// a string can also be declared as 
const myString = new String("This-is a new String") // this invokes the object 
console.log(myString)

/*
    When myString was declard the same way in a browser it first gave an undefined and when it was printed on console it was printed. There are key value pairs, 0 : 'T' and so on that does not mean that string is treated as array. String is still an object, those are just key value pairs. Let's try and access these key value pairs 

    There are a lot of methods of string in the prototype section in browser. We'll use a few now
*/

console.log(myString[0]) // 0th key -> "T"
console.log(myString.__proto__)// gives an empty seeming object but it isn't empty
console.log(myString.length)
console.log(myString.toUpperCase()) 
console.log(myString.charAt(5)) // gives the character at 5th index
console.log(myString.indexOf("a")) // gives the index of the character "a"

const newString = myString.substring(0, 5) // remember : the 4th index char is not included
console.log(newString) 

let newString2 = myString.slice(0, 4) // only difference from substring is that it can take negative value as parameters to start from the back 
let newString3 = myString.slice(-4)
console.log(newString3 + "Wanted to print this") 

// trim and replace 
const newString4 = "          athak ramgir              " // lot of start and end spaces
console.log(newString4)
console.log(newString4.trim()) 

// replace 
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url)
// url.replace("%20", "-") // again this happened to a copy not the actual url
console.log(url.replace('%20', '-'))

console.log(url.includes("hitesh"))// true : this finds out if the parameter given is in the string or not
console.log(url.includes("athak")) // false

const sample = "This is a sample string" 
let strCopy = sample.split(); 
console.log(strCopy) // gives out string as an array

let words = sample.split(" ") 
console.log(words)

words = sample.split("") 
console.log(words)