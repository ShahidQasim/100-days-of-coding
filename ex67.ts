// Arithmetic with Mixed Types: Write a function that takes two parameters: 
//a number and a string that represents a number (e.g., `5`).
// Return their sum as a number.

function mix(number : number, numstring : string){
    return number+Number(numstring)
}

console.log(mix(5,"5"));
