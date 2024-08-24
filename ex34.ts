var pizza = ["fajita","peproni","tikka", "afghani"]
for (let i = 0; i < pizza.length; i++) {
   console.log(pizza[i]);  
}
console.log("===========================================================");

pizza.forEach(e => {console.log(`the name of pizza is ${e}`)})

console.log("===========================================================");

for (var p of pizza) {
    if (p==="peproni"){
        console.log(`i like ${p} pizaa`);
    }
    else {
        console.log(`the name of pizza is ${p}`)
    }
}
console.log("===========================================================");

pizza.map(f=>{console.log(`the name of pizza is ${f}`)})