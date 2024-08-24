//Write a simple program that can take lots of scores and find their average.
function avg(...score : number[]) {
let total= score.reduce((summ,scorr)=>summ+scorr,0);
return total/score.length

}
console.log(avg(2,2,2,2,2,2,2,2,2,2,2,2,2));
console.log(avg(2,4,5,33,44,55,333,22,33,444,55,3,3,44,4,5,5,3,4,4,4,3,3,4,33,3,3,));












