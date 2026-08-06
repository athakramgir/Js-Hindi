const accountId = 1445533
let accountEmail = "athakramgir@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur" // variables can be declared here like this, however not preferred 

let accountState; // gives undefined 

// accountId = 2 this cannot be done as accound id is a const variable

/*
    Prefer Not to use var because of the block scope and function scope issue {what will happen is, that if we declare some var outside a block/function and then we declare another variable with the same name inside a block/function, then the variable inside the block/function will override the variable outside the block/function. This is not the case with let and const as they have block scope}
*/
accountEmail = "ramgir@gmail.com"
accountPassword = "123456"
accountCity = "Bangalore"

console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // prints the values in a table format array declaration