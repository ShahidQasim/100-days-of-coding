// Iterating Over Object Properties: Write a function that takes an object as an argument 
//and logs all of its properties and values.
function main(obj) {
    for (let property in obj) {
        console.log(`${property}  : ${obj[property]}`);
    }
}
main({
    make: "japan",
    model: "suzukki",
    number: 7854
});
export {};
