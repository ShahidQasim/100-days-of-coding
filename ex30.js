let usernames = ["admin", "shahid", "farhan", "asad"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log(`helo ${usernames[i]}, would u like to see status report`);
        // console.log("Hello admin, would you like to see a status report?")  //also correct
    }
    else {
        console.log(`hey  ${usernames[i]}, how are you, thanks for logging`);
    }
}
console.log("=".repeat(150));
///////////////////////AlTERNATE /////////////////////////////////////
for (var xx of usernames) {
    if (xx === "admin")
        console.log(`"helo ${xx}, would u like to see status report"`);
    // console.log("Hello admin, would you like to see a status report?")  //also correct
    else
        console.log(`hey ${xx} thanks for logging`);
}
console.log("=".repeat(150));
///////////////////////AlTERNATE /////////////////////////////////////
usernames.forEach(tt => {
    if (tt === "admin") {
        console.log(`"helo ${tt}, would u like to see status report"`);
    }
    else {
        console.log(`hey ${tt} thanks for logging`);
    }
});
console.log("=".repeat(150));
///////////////////////AlTERNATE /////////////////////////////////////
{
    let usernames = ["admin", "shahid", "ali", "farhan"];
    if (usernames.includes("admin")) {
        console.log("Hello admin, would you like to see a status report?");
    }
    if (usernames.includes("shahid")) {
        console.log("Hello shahid, thank you for logging in again");
    }
    if (usernames.includes("ali")) {
        console.log(`Hello ali, thank you for logging in again`);
    }
    if (usernames.includes("farhan")) {
        console.log(`Hello farhan, thank you for logging in again`);
    }
}
export {};
