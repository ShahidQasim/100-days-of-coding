// Use the .map() method to create a new array that contains the length of each word 
//from an array of words.
let array = ["lilly", "jasmine", "tulip", "rose"];
array.map(xx => {
    console.log(xx.length);
});
///OR 
let array2 = ["lilly", "jasmine", "tulip", "rose"];
let length = array2.map(ee => ee.length);
console.log(length);
export {};
