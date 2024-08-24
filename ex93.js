// Find the index of `Banana` in an array of fruits and replace it with `Mango`.
function main2(faroot) {
    let index = faroot.indexOf("lemon");
    if (index != -1) {
        faroot[index] = "mango";
    }
    return faroot;
}
//var faroot = ["lemon","banana"]
//console.log(faroot);  //OR------
console.log(main2(["lemon", "banana"]));
////// without return
function main(faroot) {
    let index = faroot.indexOf("lemon");
    if (index != -1) {
        faroot[index] = "mango";
    }
    //return faroot
}
var faroot = ["lemon", "banana"];
main(faroot);
console.log(faroot);
export {};
