//Refactoring to Arrow Functions: 
//Take a simple function that calculates the area of a rectangle and 
//refactor it into an arrow function.

function main(width : number, height : number) {
    return  width*height
}
console.log(main(5,2));

console.log("------------------refactorin arrow head------------------");

var withArrow = (width : number, height : number) => width*height
console.log(withArrow(5,2));
