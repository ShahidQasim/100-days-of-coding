let guest = ["jack", "mike", "stack"];
guest.map(gt => { console.log(`hey ${gt}, you are invited to dinner`); });
console.log("-".repeat(120));
for (let i = 0; i < guest.length; i++) {
    console.log(`hey ${guest[i]}, you are invited to dinner`);
}
console.log("-".repeat(120));
for (let xx of guest) {
    console.log(`hey ${xx}, you are invited to dinner`);
}
console.log("-".repeat(120));
guest.forEach(kk => { console.log(`hey ${kk}, you are invited to dinner`); });
export { guest };
// import inquirer from "inquirer";
// let  zzz= await inquirer.prompt([{
//     name : "age",
//     type : "input",
//     message : "enter your age plzzzzzz"
// }])
// console.log(`you will retire after ${60-zzz.age}`);
// let  zzz2= await inquirer.prompt([{
//     name : "name",
//     type : "input",
//     message : "enter your name"
// }])
// console.log(`${zzz2.name} !!! , really , what a beautiful name`);
