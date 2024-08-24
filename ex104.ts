// Create a function that generates a random hexadecimal color code.

function main() {
    const colour = "#" +
    (Math.random()*0xfffff*2003300).toString(16).padStart(4,"0")
    return colour
}
console.log(main());


