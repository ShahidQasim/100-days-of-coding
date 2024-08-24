//Create a function inside an object that returns the objects own name property using the this keyword.
let person = {
    name: "shahid",
    gettingname: function () {
        return this.name;
    }
};
console.log(person.gettingname());
export {};
