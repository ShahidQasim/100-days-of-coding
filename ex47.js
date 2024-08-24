//Array Destructuring: Given an array of objects representing different laptops, 
//each with properties `make`, `model`, and `year`, 
//use array destructuring to assign the first and second laptops to variables. 
//Then, log these variables.
var arrayD = [
    { make: "lenovo", model: "thinkpad", year: "2022" },
    { make: "toshiba", model: "VB", year: "1998" },
    { make: "haier", model: "m3", year: "2000" }
];
var [detail1, detail2, detail3] = arrayD;
//console.log(detail1);
//console.log(detail2);
console.log(detail3);
export {};
