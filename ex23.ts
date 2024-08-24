
let car = 'suzuki';
console.log("Is car == 'suzuki'? I predict True.")
console.log(car == 'suzuki')
console.log("^".repeat(100));
let car2 = 'mercedes';
console.log("Is car == 'mercedes'? I predict True.")
console.log(car2 == 'suzuki')
console.log("^".repeat(100));


let percentage : number= 90;
console.log(percentage>=90 ,"A-1" ) ///also correct // 
console.log(percentage>=90 ?"A-1" : "not chased" )
console.log(percentage<90 && percentage>=80  ?"A" : "ooopz" )
console.log(percentage<80 && percentage>=75  ?"B" : "unfair" )///////OR
console.log(percentage<80 && percentage>=75  ? true: false ) 
console.log(percentage<75 && percentage> 0?"fail" : "PASS" )
console.log(percentage!=90 ?"Not a topper" : "topper" )


let favfruit = "apricot"
console.log(favfruit=== "mango" || favfruit==="peach" ?"i like mango & peach as well" : "bring only mango or peach" )