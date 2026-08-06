const score = 400 
console.log(score) // 400
let balance = new Number(100) // [Number:100] 
console.log(balance) 

console.log(balance.toString().length) // 100 is converted to a string allowing us to use the properties of strings as well

console.log(balance.toExponential()) // represents balance in an exponential format like 1e2+2 in this case
balance = 1e4+2
console.log(balance.toFixed())// gives balance as 10002
console.log(balance.toFixed(2)) // gives balance as 10002.00 (2 means how many digits after decimal)

const otherNumber = 123.535929023
console.log(otherNumber.toPrecision(2))
/*
    toFixed() controls all the number of digits after decimals whereas toPrecision controls all the significant digits over the entire number
*/
const num = 1000000 // difficult to read 
console.log(num.toLocaleString()) // for the Indian Standard 
console.log("This marks the end of Number part") 
/*------------------------------------------------MATHS--------------------------------------------------- */
console.log(Math)// Math is an object and it has a number of methods (refer to the browser)
console.log(Math.abs(-1)) // +1
console.log(Math.round(4.5)) // 5 
console.log(Math.ceil(4.1)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.min(1, 2, 3, 4, 5, 6)) // 1
console.log(Math.max(1, 2, 3, 4, 5, 6)) // 6

console.log(Math.random()) // gives out random values between 0 and 1
console.log((Math.random()*10)+1) // scaled up to 1-11, to avoid getting 0-1 values we can add a 1
console.log(Math.floor(Math.random()*10)+1) // again rounding off to nearest smaller integer 

// Now let's say that we want random values between some min and max value 
const min = 10
const max = 20 
console.log((Math.floor(Math.random()*(max-min+1))+min))