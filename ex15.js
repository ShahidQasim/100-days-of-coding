let guestlis = ["jack", "mike", "stack"];
console.log(`${guestlis[2]} is not joining`);
guestlis.splice(2, 1, "attack");
guestlis.map(p => { console.log(`hey ${p}, you are invited to dinner`); });
console.log("-".repeat(120));
guestlis[guestlis.indexOf("stack")] = "attack"; // index method direct
guestlis.forEach(ii => { console.log(`hey ${ii}, you are invited to dinner`); });
console.log("modified guestlist", guestlis);
/////////////////detailed////////////////////////////////////////////////////////////////////////////
console.log("-".repeat(120));
let guestlist = ["jack", "mike", "stack"];
let gnj = guestlist[2];
console.log(`${gnj} is not joining`);
let ng = "attack";
guestlist.splice(2, 1, ng);
guestlist.map(p => { console.log(`hey ${p}, you are invited to dinner`); });
console.log("-".repeat(120));
guestlist[guestlist.indexOf(gnj)] = ng; //index method using value stored in variable
for (let yy of guestlist) {
    console.log(`hey ${yy}, you are invited to dinner`);
}
export {};
//////////////////////////////////////////////////////////////////////////////////////////////////
////--------------practice with IF----------------------------------------////////////////
// let guestlist :  string [] = ["shahid","abdullah","inam","jatt"];
// let guestcantcome ="jatt";
// console.log("this is guest list", guestlist);
// console.log(` OH ! ${guestcantcome} is not joining, patt may join`);
// let newguest = "patt";
// //guestlist.includes(newguest)
// let indexofguestcantcome  = guestlist.indexOf(guestcantcome);
// if (indexofguestcantcome!==-1) {
//     guestlist[indexofguestcantcome] = newguest 
// }
// console.log("updated list " ,guestlist)
// guestlist.forEach(guest => {  console.log(guest + "  plz join the  dinner")
// });
////--------------practice with FOR----------------------------------------////////////////
// let flist : string[]= ["jatt","patt","katt"];
// for (let i = 0; i < flist.length; i++) {
//     if (flist[i]=="katt") {
//         console.log("katt is not joining")
//         flist.splice(3,0,"shut") //shut added at 3 psition// jatt patt katt shut
//     } else {
//         console.log( "plz  \t "   +    flist[i]   +  "join the dinner") 
//     }
// } 
// console.log(flist)
// /*
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // At position 2, remove 1 item, add "Lemon" and "Kiwi"
// fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(fruits)*/
