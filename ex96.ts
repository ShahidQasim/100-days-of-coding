//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.


function  main(number :  number[]){
    return number.reduce((x,y)=>x+y,0)
}

console.log(main([2,2,2,2,2]));
