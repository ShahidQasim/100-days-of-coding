let guestlist : string[] = ["jack","mike","stack","attack","dcok"]
while(guestlist.length>2){
   let r= guestlist.pop()
    console.log(`${r} r not invited`);
}
guestlist.map(iii=>{console.log(`${iii} is invited`)})
guestlist.pop() ; guestlist.pop() 
console.log(`remaining candidates to serve ${guestlist.length}`);
//////////////////////////////////////////////////////////////////////
console.log("-".repeat(100));
let guestlis : string[] = ["jack","mike","stack"]
while(guestlis.length>2){
    console.log(`${guestlis.pop()} r not invited`);
}
guestlis.map(iii=>{console.log(`${iii} is invited`)})
guestlis.pop() ; guestlis.pop() 
console.log(`remaining candidates to serve ${guestlis.length}`);
console.log("-".repeat(100));  /////alternate
let guestli : string[] = ["jack","mike","stack"]





// let friend_ne =["Mohsin","nazir","tahir","rizwan"];

// let index= friend_ne.length;
// console.log(index)
// console.log("you can invite only two people for dinner")
// for(let i=0;i<friend_ne.length;i++)
// {
//     if(index>2) 
//   {
//     console.log(` you’re sorry you can’t invite them to dinner. ${friend_ne[0]}`)
//     friend_ne.splice(0,1)
//    }
// }
// console.log(` you are invite them to dinner. ${friend_ne}`)


///////////////////////////////////////////////////////////////////////////////

// let guestlist : string[] = ["jack","mike","stack"]
// guestlist.map(k=>{console.log(`my dinner didnt arrive on time, so ${k} please listen , i can invite only TWO people, may it can be you, sorry`)})
// guestlist.splice(1,1)
// console.log("-".repeat(100));
// guestlist.forEach(o => {console.log(`${o},you are lucky,you are one  of the two, to be invited`)})
// console.log("check reduced list",guestlist);
// console.log("total remaining  students to be serve",guestlist);
// console.log("-".repeat(100));
// let guestlis : string[] = ["jack","mike","stack"]
// guestlis.pop()
// guestlis.forEach(o => {console.log(`${o},you are lucky,you are one  of the two, to be invited`)})
// console.log("check reduced list",guestlis);
// guestlis.pop()
// guestlis.pop()
// console.log("total remaining  students to be serve",guestlis);
// console.log("-".repeat(100));
// let guestli : string[] = ["jack","mike","stack","attack"]
// while (guestli.length>2) {  /// while is loop, keep running till stat is true
//     guestli.pop()}          /// if is statement runs only once
// guestli.forEach(o => {console.log(`${o},you are lucky,you are one  of the two, to be invited`)})
// console.log("check reduced list",guestli);


