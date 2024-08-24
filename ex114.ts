// Iterate over a Map of student IDs and names, and log each pair to the console.

let info = new Map<number, string>()
info.set(1,"abdul")
info.set(2,"rafay")
info.set(3,"ali")

info.forEach((name,id)=>console.log(`student ID ${id} , name : ${name}`))

