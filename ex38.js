function describe_city(city, country) {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi", "pakistan");
describe_city("quetta", "pakistan");
describe_city("riaz", "saudia");
//=================================================================
function describe_city2(c1, c2, c3, c4, cy1, cy2, cy3, cy4 = "pakistancl") {
    console.log(`${c1} is in ${cy1}`);
    console.log(`${c2} is in ${cy2}`);
    console.log(`${c3} is in ${cy4}`);
    console.log(`${c4} is in ${cy3}`);
}
describe_city2("khi", "lhr", "isl", "riaz", "pk", "pak", "saudia");
export {};
