// Modify a method in an object to use the this keyword to access another property in the same object.
let rectangle = {
    length : 2,
    width : 2,
    area : function() {
        return this.length*this.width
    }
}
console.log(rectangle.area());


