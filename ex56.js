// Keep Only Strings: Given a mix of different types of items,
// make a new list that has only the words.
let mixture2 = ["cat", 6, "banana", 4, "rain"];
let speration = mixture2.filter(item => typeof item === "number");
console.log(speration);
//-------------------OR-------------------
let mixture3 = ["cat", 6, "banana", 4, "rain"];
console.log(mixture3.filter(tt => typeof tt === "string"));
export {};
//-------------OR------------///output in true false form
// let mixture=["cat",6,"banana",4,"rain"]
// mixture.filter(xx=>{console.log(typeof xx === "string")})
