//Making Flexible Object Keys: 
//Learn how to set up a list where you can change the name of each section 
///based on what you need at that moment, like adjusting labels based on user choices.
function FlexibleObject(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
// let specificObject =  FlexibleObject("weather","rainy")
// console.log(specificObject);
////--------OR----
console.log(FlexibleObject("weather", "sunny"));
export {};