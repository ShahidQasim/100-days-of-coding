function make_shirt(size, text) {
    console.log(`the size of  shirt is ${size}  and message on it is ${text}`);
}
make_shirt("small", "hey dear");
make_shirt("large", "heppp");
//------------------------------------------------------------------------------------
function make_shir2(size, text) {
    return `${size} ${text}`;
}
console.log("small", "hey dear");
// console.log(make_shir2("small","hey dear"));
//------------------------------------------------------------------------------------
let Tshirt = function make_shirt(text, size) {
    return `${text}, ${size}`;
};
console.log(Tshirt("medium", "go out for falastine")); //OR
console.log("medium", "go out for falastine");
/////////////////////////ALTERNATE -2
function make_shirt3(text, size) {
    return "" + text + "" + size; //OR
    //return `${text}, ${size}`
}
console.log("medium", "go out for falastine");
//////////////////////////////ALTERNATE ----3  SAME AS FIRST BUT HERE VARIABLE IS DECLARED BELOW/////////////
function make_shirt2(text, size) {
    console.log(`size  : ${text} text : ${size}`);
}
let text = "go go";
let size = "large";
make_shirt2(text, size);
export {};
