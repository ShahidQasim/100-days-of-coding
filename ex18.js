let places = ["dutch", "cairo", "Algeria", "Bosnia"];
console.log("non alphabetical order", places);
console.log("original order", places);
console.log("alphabetical order", places.sort());
console.log("original order", places);
console.log("reverse alphabetical order", places.reverse());
console.log("original order", places);
console.log("order changed", places.reverse());
console.log("order changed", places.reverse());
console.log("alphabetical order", places.sort());
console.log("reverse alphabetical order", places.sort().reverse());
console.log("=".repeat(100));
function sorting(loc, order) {
    if (order === 0) {
        return [...loc].sort();
    }
    else {
        return [...loc].sort().reverse();
    }
}
console.log(places);
console.log(sorting(places, 0));
console.log(places);
console.log(sorting(places, 1));
//console.log(Object.keys(places.sort())); //// this is WRONG--beaware of brackets
//console.log(Object.keys(places.reverse())); //// this is WRONG--beaware of brackets
console.log(Object.keys(places).sort());
console.log(Object.keys(places).reverse());
export {};
// Description
// The Object.keys() method returns an array with the keys of an object.
// The Object.keys() method does not change the original object.
// // Create an Object
// const person = {
//     firstName: "aaa",
//     lastName: "bbb",
//     age: 9999,
//     eyeColor: "cccc"
//   };
//   // Get the Keys
//   const keys = Object.keys(person);
//   console.log(keys);
