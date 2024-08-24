{

function make_shirt(size : string ="large", text : string="i love tsc") {
    console.log(`${text}, if size is ${size}`);
    
}
make_shirt()
make_shirt("medium")
make_shirt("small", "get off")


}/// bracket just to avoid influence

/// ALTERNATE FUNCTION METHOD


(function (medium=130, large=50, text="i love type script"){
    console.log(`shirt size ${medium} so ${text}`)
    console.log(`sirt size is ${large} so ${text}`)
    })()
    