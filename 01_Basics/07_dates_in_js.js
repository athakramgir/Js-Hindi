const myDate= new Date(); 
console.log(myDate) // this gives something as 2026-08-06T15:08:35.664Z
console.log(myDate.toString()) // this gives Thu Aug 06 2026 20:39:01 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // this only gave a date:  Thu Aug 06 2026
console.log(myDate.toISOString()) // this gave : 2026-08-06T15:12:06.956Z look below (throws a range error)
console.log(myDate.toJSON()) // this gave : 2026-08-06T15:12:06.956Z (both gives standardized ISO 8601 string in UTC time) difference occurs in how they handle invalid dates and times (return a null)
console.log(myDate.toLocaleDateString()) // this gave : 6/8/2026 looks like gave the date in local format
console.log(myDate.toLocaleString()) // this gave : 6/8/2026, 8:42:06 pm looks like gave the the date + time in local format

// What type is Date? 
console.log(typeof myDate) 

const myBirthday = new Date(2006, 7, 28, 3, 30, 35)
console.log(myBirthday.toDateString()) 
console.log(myBirthday.toLocaleString())

const randomDate = new Date("08-06-2026")
console.log(randomDate.toLocaleString())

let myTimeStamp = Date.now() 
console.log(myTimeStamp)
console.log(myDate.getTime()) // gets you the time of the date you created

// to get time in seconds (generally comparisons happen with time in ms but for some purpose if you have to get time in seconds you can do something like...) 
console.log(Math.floor(Date.now()/1000)) 

let newDate = new Date() 
console.log(newDate.getDate()) 
console.log(newDate.getDay())
console.log(newDate.getHours())
console.log(newDate.getMonth()+1) // months starts from 0

const whatIsTheDayToday = newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(whatIsTheDayToday) 