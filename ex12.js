let friendName = ["shahid", "zahid", "naheed", "rameez"];
console.log("---------------printing separately-------------------");
console.log(`hey  ${friendName[0]} how are you`);
console.log(`hey  ${friendName[1]} how are you`);
console.log(`hey  ${friendName[2]} how are you`);
console.log("hey" + friendName[3] + "  how are you");
console.log("---------------printing using loop-------------");
for (let i = 0; i < friendName.length; i++) {
    console.log(`hey  ${friendName[i]} how are you`);
}
console.log("---------------using  for-of-------------------");
for (let fn of friendName) {
    console.log(`hey  ${fn} how are you`);
}
console.log("---------------using  MAP-------------------");
friendName.map(fnew => console.log(`hey  ${fnew} how are you`));
console.log("---------------using  EACH -------------------");
friendName.forEach(u => console.log(`hey  ${u} how are you`));
export {};
