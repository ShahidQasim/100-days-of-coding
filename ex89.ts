//Rounding Numbers: Create a function that takes a number with decimals (e.g., `3.14159`) 
//and rounds it to two decimal places

function main(kk :  number){
    return Number(kk.toFixed(2))
}
console.log("234.448989 => ", main(234.448989));

////////////ORRRRRRRRRRRRRRRR///////////////////////////////////////

function main2(kl : number){
    return Math.round(kl*100)/100
}

console.log("234.448989 => ", main2(234.448989));
