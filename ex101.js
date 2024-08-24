//Generate a random integer between 1 and 10.
function main() {
    return Math.floor((Math.random() * 10 + 1)); ///// +1 means integers b/w 1 & 10 excluding 0///////
}
console.log(main());
/////ORR ALTERNATE ////////////////
console.log(Math.floor((Math.random() * 10) + 1));
export {};
