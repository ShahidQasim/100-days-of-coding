//Combining Arrays with Spread Operator: 
//Suppose you are comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order, 
//then log the result.
console.log("---------------------string combination in ascending--------------");
var price1 = [220, 330, 440];
var price2 = [660, 830, 4940];
var combine = [...price1, ...price2].sort((a, b) => (a - b));
console.log(combine);
////////////////////////////////////////////////////////////////////////////////////
console.log("---------------------string combination in alphabetica--------------");
var str1 = ["ddd", "aaa", "ccc"];
var str2 = ["eee", "bbb", "ffff"];
var combinestr = [...str1, ...str2].sort();
console.log(combinestr);
export {};
