//Find the Average Grade: Given a list of grades, calculate the average grade.

let grades  =[45,44,33,22,56,77,44]
let average = grades.reduce((total,grades)=> total + grades,0) / grades.length
console.log(average);

///////-------------OR---------------------------

console.log(grades.reduce((total,grades)=> total + grades,0) / grades.length);

///////-------------OR---program in one line------------------------

console.log([45,44,33,22,56,77,44].reduce((total,grades)=> total + grades,0) / grades.length);
