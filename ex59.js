//Add a Special Number: Make a program that creates custom adders. 
//These adders can add a specific number to any other number you give them late
function makeadd(valueofAdition) {
    return function (number) {
        return number + valueofAdition;
    };
}
let addfive = makeadd(5);
console.log(addfive(10));
export {};
