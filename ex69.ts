// Dividing and Finding the Remainder: 
//Write a function that divides two numbers and returns both the quotient and the remainder.
// Use an object to return both values.

// function main(divident : number, divisor : number) {
//     let quotient = Math.floor(divident/divisor)
//     let  remainder= divident%divisor
//     return `quotient ${quotient},  remainder ${remainder}`
// }
// console.log(main(10,3));




function main(divident : number, divisor : number): {quotient : number , remainder : number} {//use for return {}
    let quotient = Math.floor(divident/divisor)
    let  remainder= divident%divisor
    return {quotient , remainder}    ////this  due to above return method {}
}
console.log(main(10,3));