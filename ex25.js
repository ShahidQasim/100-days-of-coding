let alienColor = ["red", "yellow", "green"];
for (let i = 0; i < alienColor.length; i++) {
    if (alienColor[i] === "orange") {
        console.log("earn 5 points");
    }
    else {
        console.log("not earn any points");
    }
    break;
}
/////////////////////////////////OR////////////////////////////
console.log("=".repeat(100));
let alien_color = "red";
if (alien_color === "green") {
    console.log("you earned 5 points");
}
if (alien_color === "yellow") {
    console.log("you earned 10 points");
}
if (alien_color === "red") {
    console.log("you earned 15 points");
}
export {};
// // ALTERNATE 
// /*if (alien_color==="green") {
//     console.log("you earned 5 points") }
// else if (alien_color!="green"){
//     console.log("Game Over") 
// }  */
// let alienColor : string[] =["red","yellow","green"]
// for (let i = 0; i < alienColor.length; i++) {
//     function main(alien_color :  string[]){
//      if (alienColor[i]=="yellow") {         ////=== is must, not single =
//          console.log("player earn 5 points")}
//             else {console.log("no points earned")}     
//     }
//     main(alienColor)
//     break;
// }
// }
// 
