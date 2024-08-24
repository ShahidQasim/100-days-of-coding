//Function with Rest Parameters: 
//Write a function that takes a rest parameter representing multiple hobbies.
// It should log each hobby with a statement saying you enjoy that hobby.

function main(...hobbies : string[]){
    hobbies.map(rr=>{console.log(`i enjoy ${rr}`);
    })
}
main("traveling","walking","sliding")
main("adventuring")


//////////////////////////////////////////////////////////////////

// function main(...hobbies : string[]) {
//     console.log(`my  hobby is ${hobbies}`);

// }
// main("traveling","walking","sliding")
// main("adventuring")