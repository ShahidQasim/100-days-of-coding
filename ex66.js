// Logical AND Verification: Create a function that checks two boolean (true or false) values. 
//It should only say `true` if both are true, using the `&&` operator. For instance, 
//`checkBothTrue(true, false)` should be `false`.
function chkvale(value1, value2) {
    return value1 && value2;
}
console.log(chkvale(true, false));
console.log(chkvale(true, true));
export {};
