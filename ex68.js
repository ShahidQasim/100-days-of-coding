//  Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
// Round the result to two decimal places.
function desimals(num1, num2) {
    // return  Math.round(num1*num2)  //// No decimal places
    return Math.round(num1 * num2 * 100) / 100; //// two decimal places
    /// return  Math.round(num1*num2*1000)/1000   /// three decimal places
}
console.log(desimals(0.1, 0.344));
export {};
