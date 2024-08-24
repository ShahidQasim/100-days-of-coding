let guestlist = ["jack", "mike", "stack"];
for (let t of guestlist) {
    console.log(`hey ${t}we have bigger dinner table, Oohu!!!!!!!!!!!!!! now we are able to add three more friends`);
}
guestlist.unshift("mack");
guestlist.splice(guestlist.length / 2, 0, "tike");
guestlist.push("attack");
guestlist.map(r => { console.log(`hey ${r}, plz join our bigger dinner table`); });
console.log("modified guestlist", guestlist);
console.log("-".repeat(100));
let gl = ["jack", "mike", "stack"];
gl.splice(0, 0, "mack");
gl.splice(2, 0, "tike");
gl.splice(5, 0, "attack");
console.log("modified guestlist", gl);
for (let i = 0; i < gl.length; i++) {
    console.log(`hey ${gl[i]}, plz join our bigger dinner table`);
}
export {};
