let score = "33abc" // in case there is no abc in this string then everything is logical
score = "33" // gives valueInNumber = 33 
score = null // for this valueInNumber gives 0 
score = undefined // again NaN
score = true // valueInNumber = 1
score = false // valueInNumber = 0
score = "athakramgir" // again NaN

// again (don't bother with this)
score = "33abc"


console.log(typeof score)
console.log(typeof(score)) 

let valueInNumber = Number(score); 

console.log(typeof(valueInNumber)) // will give number 
console.log(valueInNumber) // will give NaN (not a number)


let isLoggedIn = 1
isLoggedIn = "" // this gives false
isLoggedIn = "athak" // this gives true
isLoggedIn = "Hows it going?" 
let booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(typeof(booleanIsLoggedIn)); 
console.log(booleanIsLoggedIn); // 1 really means true 

let someNumber = 33
let StringNumber = String(someNumber); 
console.log(typeof(StringNumber)) 
console.log(StringNumber) 
let random_number = 333
console.log(typeof random_number)
console.log(random_number)

/*---------------------------------------------Operations------------------------------------------------- */
let value = 3 
let negValue = -value 
console.log(value)
console.log(negValue) // -3

console.log(2+2) // 4
console.log(2-2) // 0
console.log(2*2) // 4
console.log(2/2) // 1
console.log(2**3) // 8
console.log(3%2) // 1

let str1 = "Hello"
let str2 = " World" 
let str3 = str1 + str2 
// console.log(str3)
// console.log(str1 + str2)

// problems
console.log("1" + 2) // gives 12
console.log(1 + "2") // gives 12 -> both are taken as strings
console.log("1" + 2 + 2) // 122 -> again all are taken as strings
console.log(1 + 2 + "2") // 32 -> first 1 + 2 executed and then conctatated as string
// whichever data is written first is performed first for more refer to ECMA

/*
    however writing the code as written above is messy. This is not expected. To perform certain operations in a specific order, use parenthesis. A good example is given below 
*/
console.log((3+5) + (100%2) + (10/5) + "athak")

console.log(true) // write true on console
console.log(+true) // written 1 on console 
// console.log(true+) // error
console.log(+"") // false , as empty string means treated as zero 
console.log(+"a") // NaN JavaScript tries to convert "a" to a number which gives NaN
console.log(+"123") // 123 

let num1, num2, num3 
num1 = num2 = num3 = 2*2 // this works but again, not considered a good practice

let counter = 100
++counter // pre-fix increment
console.log(counter)
counter++ // post-fix increment 
console.log(counter) 

