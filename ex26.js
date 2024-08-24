{
    let alienColor = ["red", "yellow", "green"];
    for (let i = 0; i < alienColor.length; i++) {
        if (alienColor[i] === "green") {
            console.log("you earn 5 points for shooting GREEN alien");
        }
        else if (alienColor[i] != "green") {
            console.log("you earn 10 points");
        }
    }
}
console.log("=".repeat(100));
{
    let alienColor = "green";
    if (alienColor === "green") {
        console.log("you earn 5 points for shooting the alien  for shooting GREEN alien");
    }
    if (alienColor != "green") {
        console.log("you earn 10 points");
    }
}
console.log("=".repeat(100));
let alienColor = "red";
if (alienColor === "green") {
    console.log("you earn 5 points for shooting the alien  for shooting GREEN alien");
}
else if (alienColor != "green") {
    console.log("you earn 10 points");
}
else {
}
export {};
