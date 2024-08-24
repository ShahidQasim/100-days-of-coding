//Making Enums for Vehicles: Lets create categories for vehicles like 
//cars, trucks, and motorcycles using enums, and show one example.
var vehiclestype;
(function (vehiclestype) {
    vehiclestype[vehiclestype["car"] = 0] = "car";
    vehiclestype[vehiclestype["motorcycles"] = 1] = "motorcycles";
    vehiclestype[vehiclestype["riksha"] = 2] = "riksha";
    vehiclestype[vehiclestype["gadagari"] = 3] = "gadagari";
})(vehiclestype || (vehiclestype = {}));
console.log(vehiclestype.car); ////enums start counting from 0 by default
console.log(vehiclestype.motorcycles);
console.log(vehiclestype.riksha);
console.log(vehiclestype.gadagari);
export {};
