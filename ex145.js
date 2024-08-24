// Create a function that accepts a callback and invokes it with some arguments.
function executingCB(CB, n1, n2) {
    CB(n1, n2);
}
//example
let subtract = (a, b) => {
    console.log(a - b);
};
executingCB(subtract, 4, 3);
export {};
