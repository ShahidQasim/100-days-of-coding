// Create a function that accepts a callback and invokes it with some arguments.

    function executingCB(CB :(n1 :number, n2  : number)=>void,
    n1 :number,
    n2 :number) : void {
    CB(n1,n2)
}

//example

let subtract=(a:  number, b :number)=>{
    console.log(a-b);
    
}
executingCB(subtract,4,3)






