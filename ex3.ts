
let name = "shahid"
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.toLocaleLowerCase());
console.log(name.charAt(0).toUpperCase() + name.slice(1));  ///title case 
console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());  ///title case  if in centre capital letter


console.log("-----using for---------------");

let myname = "my namE is shahid " 
function TC1(myname : any) {
//myname  = myname.split(" ");// if no capital letter in centre then
//OR if a capital letter exist in centre then
myname  = myname.toLowerCase().split(" ");
for (let i = 0; i < myname.length; i++) {
    myname[i]=myname[i].charAt(0).toUpperCase() + myname[i].slice(1);
}
    return myname.join(" ")
}
console.log(TC1(myname));

// // console.log(TC("my name is shahid"));
console.log("-----using map---------------");

let name2 = "my namE is shahid "
function TC2(name2:any) {
    return name2.toLowerCase().split(" ").map(function(word:any){
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(" ")
}
console.log(TC2(name2));



console.log("-----using replace---------------");

let name3 :  string = "my namE is ji"  ///dont give useless spaces especialy in start
function TC3(name3 :  string) {  /// as i have wasted a lot of time in these spaces prob
   return name3.toLowerCase().split(" ").map(function(word){    ///it was all about spaces
        return (word.replace(word[0],word[0].toUpperCase()))
    }).join(" ")
}
console.log(TC3(name3));



///////////////////////////////////////////////////////////////////////////////////////////
console.log("----test----replace()");
var re = /(\w+)\s(\w+)/; 
var str = "shahid qasim"; 
var newstr = str.replace(re, "$2, $1"); 
console.log(newstr);

console.log("=".repeat(100));
console.log("=".repeat(100));
console.log("=".repeat(100));

console.log("==================FOR PRACTICE==============================");

console.log("=".repeat(100));
console.log("=".repeat(100));
console.log("=".repeat(100));

console.log("============MAP================");

function  main(ppp : string) {
    return ppp.toLowerCase().split(" ").map(function(word){
        return (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(" ")

}
console.log(main("i have no eNd"));

console.log("============MAP===REPLACE=============");
function main2(sss: string) {
    return  sss.toLowerCase().split(" ").map(function(word){
        return (word.replace(word[0],word[0].toUpperCase()))
    }).join(" ")
}
    console.log(main2("i have no eNd"));

    console.log("============FOR================");
function main3(ttt: any) {
     ttt=ttt.toLowerCase().split(" ")
     for (let i = 0; i < ttt.length; i++) {
        ttt[i]=ttt[i].charAt(0).toUpperCase() + ttt[i].slice(1)
        
     }

     return ttt.join(" ")
}
console.log(main3("i have no eNd"));



























