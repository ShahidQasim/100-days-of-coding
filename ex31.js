let usernames = ["admin", "shahid", "farhan", "asad"];
if (usernames.length >= 1) {
    console.log("list is not empty");
}
else {
    console.log("list is empty");
}
console.log("===========================================================================");
{
    let usernames = [];
    if (usernames.length >= 1) {
        console.log("list is not empty");
    }
    else {
        console.log("need more users");
    }
}
console.log("===========================================================================");
////////////////////////////////while//////////////////
if (!usernames.length) {
    console.log("need more users");
}
else {
    while (usernames.length > 0) {
        usernames.pop();
        usernames.length--;
    }
    console.log("users not in array", usernames);
}
export {};
