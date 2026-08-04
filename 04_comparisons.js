console.log(2 >= 1) 
console.log(2 < 1) 
console.log(2 == 1) // simple because same data type
// this is very simple and output can easily be predicted. Trick part is the comparisons of different data types 

console.log("2" > 1) 
console.log("02" > 1) 
console.log("2" == 2) // notice how this gives a true
/*
    sometimes, the output of a comparisons between different data types does not give predictable result. Therefore, ensure same data type before comparing
*/

console.log(null > 0); // this gives me a false
console.log(null == 0); // false
console.log(null >= 0); // true 
/*
    this happens primarily because comparisons treat null as 0 and JS treats comparisons and equality check differently. Same confusion happens in undefined. These types of comparisons create confusion
*/
console.log(undefined > 0); 
console.log(undefined == 0); 
console.log(undefined >= 0);

// Strict check (===) : this will strictly check the two comparing values, meaning along with the values it will also check the data type
console.log("2" === 2); // hence this gives a false (data type also checked) 