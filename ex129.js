//Explain how this behaves differently in arrow functions compared to traditional functions.
let tradVSarr = {
    value: "trad vs arrow ",
    tradvalue: function () {
        console.log("trad fn", this.value);
    },
    // arrofun : ()=>{
    //     console.log("arrow",this.value);   ////i just comment this to avoid errors in other programs
    // }                                      //// un comment this to see the difference errors
};
tradVSarr.tradvalue();
//tradVSarr.arrofun()
// 'this' is not bound to tradVSarr object
//  but to the scope in which tradVSarr was defined
// Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 
// 'this' is determined in traditional functions versus arrow functions.
export let add = (a, b) => a + b;
