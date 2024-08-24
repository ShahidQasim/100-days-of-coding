// Create an arrow function that takes multiple parameters and returns the product of all parameters.
const arrowfn_m_param = (...number) => number.reduce((total, number) => total * number);
console.log(arrowfn_m_param(1, 2, 3, 4, 5));
//////////////////////////////////////////////////////////////////////////////////////
let tradfun = function (...numbers) {
    return numbers.reduce((total, num) => (total * num));
};
console.log(tradfun(1, 2, 3, 4, 5));
//////////////////////////////////////////////////////////////////////////////
////normal function
function main(...numbr) {
    return numbr.reduce((total, nn) => (total * nn));
}
console.log(main(1, 2, 3, 4, 5));
export {};
