
let  mot : Array<[brand : string , transprt: string]> = []

mot.push(["honda","bike"])
mot.push(["prado","car"])
mot.push(["yutong","bus"])
console.log("-".repeat(100))
for (let i = 0; i < mot.length; i++) {
    console.log(`i wish to own ${mot[i]}`);
}
console.log("-".repeat(100))
mot.forEach(ty => {console.log(`i wish to own ${ty}`)
});
console.log("-".repeat(100))
mot.map(ui=>{console.log(`i wish to own ${ui}`)})
console.log("-".repeat(100))
for (let xx of mot) {
    console.log(`i wish to own ${xx}`)
}
console.log("-".repeat(100))



