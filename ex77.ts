//Default Parameters: Write a function that greets a user.
// It should take the users name as a parameter and say hello. 
//If no name is given, it should greet an anonymous user.


function defaultFn(user: string = "shahid") {
    console.log(`hello ${user}`);
    
}
defaultFn() //// takes default if empty
defaultFn("kazim")






///////ORRRRRRRRRR////////////////

// function defaultFn(username : string= "shahid"){
//     return `hello ${username}`
// }
// console.log(defaultFn());//take defaultparameters
// console.log(defaultFn("kazim"));


