// Explain how the this keyword changes its value when used inside a nested function within a method.
const object = {
    property: "value",
    outer: function () {
        console.log(this.property);
        const inner = () => {
            console.log(this.property);
        };
        inner();
    }
};
object.outer();
export {};
