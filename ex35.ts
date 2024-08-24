
var animals = ["cat","dog","lion"]
animals.forEach(a => {console.log(`the name of animal is ${a}`)});

animals.map(u=>{
    if (u==="cat")
        console.log(`${u} is cute`);
    if (u==="dog")
        console.log(`${u} is faithful`)
    if (u==="lion")
        console.log(`${u} is king`); 
})

console.log("the most common thing among them is Bravery");

