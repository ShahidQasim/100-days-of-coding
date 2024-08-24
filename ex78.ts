//Function Expressions vs. Function Declarations:
// Compare function expressions and declarations by creating one of each 
//that performs the same task, such as squaring a number.


console.log("-----function Declaration---> a normal function");

function FnDeclaration(num : number){
    return num*num
}
console.log(FnDeclaration(4));

console.log("------function Expressionm--------");

let FnExpression= function fnE(num : number){
    return num*num
}
console.log(FnExpression(4));
    



