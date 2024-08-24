//Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function maain(unm) {
    return (unm % 2 === 0 && unm % 3 === 0);
}
console.log(maain(2));
console.log(maain(1));
console.log(maain(3));
console.log(maain(6));
export {};
