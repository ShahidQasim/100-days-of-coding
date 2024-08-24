//Double Numbers in an Array: Make a list of numbers. 
//Then, use a trick to make a new list where each number is twice its original value.

let Array = [1,2,3,4,5,6,7,8,9,10]
let doubleNumber= Array.map(xx=>xx*2)
console.log(doubleNumber);

//----------------OR-------------------

let Array2 = [1,2,3,4,5,6,7,8,9,10]
console.log(Array2.map(xx=>xx*2));

//--------------OR------------------

let Array3 = [1,2,3,4,5,6,7,8,9,10]
Array3.map(xx=>{console.log(xx*2)})



