// Convert a traditional function expression to an arrow function.
let traditionalfn = function (a, b) {
    return a + b;
};
let arrowfn = (a, b) => a + b;
console.log(traditionalfn(2, 2));
console.log(arrowfn(2, 2));
export {};
