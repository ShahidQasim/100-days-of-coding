// Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `` 
//that uses both `let` and `const`. 
//Show how variables declared inside the block are not accessible outside of it.
{
let letvariable    ="hey"
const constvariable  ="bye" 
console.log(letvariable);
console.log(constvariable);

}  // ====This is block Scope {}

try {
    //console.log(letvariable);   ////both wont work
   //console.log(consvariable);
  
}  
   catch(error){
console.log("let wont work outside the block", error);

}
finally {
   console.log("hey");
   
}





