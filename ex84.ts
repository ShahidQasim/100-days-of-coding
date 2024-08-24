// Replacing Text in a String:
// Write a function that takes a sentence and replaces all instances of the word 
//`JavaScript` with `TypeScript`.

function   main(input : string){
    return  input.replace("javascript" , "Typescipt")
  ///           //  return  input.replace(/javascript/g , "Typescipt") // for globally
}
console.log(main("i llike javascript"));
