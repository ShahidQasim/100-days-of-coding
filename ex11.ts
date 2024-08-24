
let friendNames : string[] = ["shahid", "ali", "zahid"]

console.log("---------------printing using loop-------------------");

for (let i = 0; i < friendNames.length; i++) {
    
    console.log(friendNames[i]);
}

console.log("---------------using  MAP-------------------");

friendNames.map(ftd=>console.log(ftd));

console.log("---------------using  for-of-------------------");
for (let Fname of friendNames) {
    console.log(Fname);
}
console.log("---------------printing separately-------------------");

console.log(friendNames[0]);
console.log(friendNames[1]);
console.log(friendNames[2]);

console.log("---------------using  EACH -------------------");
friendNames.forEach(u=>console.log(u))