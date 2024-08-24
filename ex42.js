////////-----------original array----------------------------
var magArray = ["anthar", "manthar", "kala", "kalanthar"];
function show_magicians() {
    magArray.map(m => { console.log(m); });
}
show_magicians();
/////------------------modified array
var magArray = ["anthar", "manthar", "kala", "kalanthar"];
function make_great() {
    magArray.forEach(k => { console.log(`the Great magician ${k}`); });
}
make_great();
export {};
