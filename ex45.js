// interface car {
//     manfacturer : string
//     model_number : number
// }
// var car_object : car= {
//     manfacturer :"nissan",
//     model_number :  122
// }
export {};
// function makecar(car_object:{color : string, brand : string}) {
//     return `car color ${car_object.color} & car brand is ${car_object.brand}`
// }
// console.log(car_object.manfacturer, car_object.model_number)
// console.log(makecar({color: "blue", brand : "gli"}));
// /////////////////using simple function////////////////////////////////////////////////////////
// function carmaking(color : string, brand : string) {
//     return `car color ${color} & car brand is ${brand}`
// }
// console.log(car_object.manfacturer, car_object.model_number)
// console.log(carmaking("blue","gli"));
// {
// ////////////NEW method////////////////////////////////////////////
// function makecar(manfacturer : string, model_number : number, ...properties : [string , any][]) {
// var car : any = {
//     manfacturer,
//     model_number,
//     //properties  ///no neeed because it is used in for loop, ther wise wil print two times
// }
// for (var [key,value] of properties){
//     car[key]=value
// }
// return car
// }
// console.log(makecar("japan",333,["color", "blue"],["speed","27kmh"],["tyre","black"]));
// }
