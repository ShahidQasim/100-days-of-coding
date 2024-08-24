/// Enhanced Laptop Object: Construct an object for a laptop including properties make,model,year,
// and a method describe() that logs a sentence about the laptop.
var details = {
    make: "hp",
    model: "vibrant series",
    year: 2024,
    describe: function method() {
        console.log(`laptop name is ${this.make},and model is ${this.model} and established year is ${this.year}`);
    }
};
details.describe();
export {};
