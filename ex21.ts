// type list=  {
//     name : string,
//     age : number,
//     cell : number
// } 

//////ORRRR///////////////////////////

interface list  {
    name : string,
    age : number,
    cell : number
} 
let List : list[] = [];
List.push(
{
    name  : "shahid",
    age  : 28,
    cell : 15,
},
{
    name : "rana",
    age   : 23,
    cell :119
})
List.map(i=>{console.log(`The name of student is ${i.name}, and his age is ${i.age} and his cell is ${i.cell}`)})
console.log("$".repeat(100));
for (var j of List) { console.log(`The name of student is ${j.name}, and his age is ${j.age} and his cell is ${j.cell}`)}
console.log(List[0]);
console.log(List[1]);





