let score = "33abc" // in case there is no abc in this string then everything is logical
score = "33" // gives valueInNumber = 33 
score = null // for this valueInNumber gives 0 
score = undefined // again NaN
score = true // valueInNumber = 1
score = false // valueInNumber = 0
score = "athakramgir" // again NaN



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