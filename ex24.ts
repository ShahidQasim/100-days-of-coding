let stat1 : string = " shahid"
let stat2 : string = " shahid"
let stat3: string = " USMAN"
console.log("test for equality & inequality")
console.log(stat1===stat2)
console.log(stat1===stat3)
console.log(stat3!=stat2)

console.log("test for lower/upper case function")
console.log(stat1.toUpperCase()===stat2.toUpperCase())
console.log(stat1===stat3.toLowerCase())
console.log(stat3===stat2)

console.log(" Tests using  and ,or operators")


let s = 1
let t= 2
let u = 3

console.log(s<t && u>t)
console.log(s>t && u>t)
console.log(s<t || u>t) 
console.log(u<t || u>t)

console.log(" Test whether an item is in a array")

let arr : string[] = ["apple","banana","mango"]
console.log(arr.includes("banana"))
console.log(arr.includes("melon"))

console.log(" Test whether an item is NOT in a array")

let arr1 : string[] = ["apple","banana","mango"]
console.log(!arr1.includes("banana"))
console.log(!arr1.includes("melon"))

//EXTRA

console.log(" Test for other logical operations")
let  num1 = 1 
let  num2 = 2

console.log("operation -1 " ,num1>num2)
console.log(num1<num2)
console.log(num1>=num2)
console.log(num1<=num2)
console.log(num1!=num2)
console.log(num1===num2)





















