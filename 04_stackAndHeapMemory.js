// stack and heap memory
// stack memory used for primitive data types and heap memory used for non-primitive data types 
// stack memory gives a copy of the variables declared  whereas heap memory gives a reference to the variable declared so changes occur in the origional value

let myName = "athak ramgir" 
let myNickName = myName // myNickName is given a copy of the variable myName 
myNickName = "manu" // so changes will be made in the copy of myName and not in the origional value
console.log(myName)// athak ramgir
console.log(myNickName)//manu

let myObj1 = {
    email: "dummy@gmail.com", 
    name : "Dummy User"
}
let myObj2 = myObj1 

myObj2.email = "dummy2@gmail.com" // modified the email here. Since both myObj1 and myObj2 are pointing to the same reference in the heap memory both will give the same output which the modified one

console.log(myObj2.email)
console.log(myObj1.email) 