function describe_city(city, country) {
    return `"${city},${country}"`;
}
console.log(describe_city("karachi", "pakistan"));
//////ALTERNATE
console.log("============================");
console.log("ALTERNATE 1");
console.log("============================");
function city_country(city, country) {
    console.log(`${city},${country}`);
}
city_country("karachi", "pakistan");
city_country("lahore", "pakistan");
city_country("ghaza", "falasteen");
export {};
// var y= function describe_city2(city : string, country : string){
//     return `"${city},${country}"`
// }
// console.log(y("karachi","pakistan"))
