console.log("------------error-------------------");
let rivers = ["indus", "jehlum", "chenab", "ravi"];
console.log(rivers.indexOf("sutlej")); ////error
console.log("river name : ", rivers[4]);
console.log("------------Correction-------------------");
rivers.push("sutlej");
console.log(rivers.indexOf("sutlej"));
console.log("river name : ", rivers[4]);
export {};
