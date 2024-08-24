var magArray =["anthar","manthar","kala","kalanthar"]

function makeGreat(magArray :  string[]) : string[]{
    var greatMag : string[] = []
    magArray.forEach((xx) =>{greatMag.push(`${xx} the  great`)})
    return greatMag;
}
function show_magicians(magArray : string[]){
    magArray.forEach(tt=>{console.log(tt)})
}

show_magicians(magArray)
///OR///////////////////////
// var greatMagicians= makeGreat(magArray)
// show_magicians(greatMagicians)
//////////////////////////////////////////////////////////
show_magicians(makeGreat(magArray).slice())
////////////////////////////////////////////////////////

///---------------------------------------------------------------------

// {

// var magArray =["anthar","manthar","kala","kalanthar"]
// var DupMagArray =[...magArray]   /////Duplicate

// function show_magicians(prefix : string) {
//     for  (var p of DupMagArray){
//     console.log(`${p},${prefix}`)
//     }
// }
// show_magicians("The Great")
// console.log(magArray)

// }
////=============================================================================
///////////////////////////////////////////////////////////////////////
// var comment  =  ["the great","the LOOSER","the pro"," the professional"]
// var magArray =["anthar","manthar","kala","kalanthar"]

// function show_magicians(){
//     magArray.map((val,index)=>{console.log(`${val},${comment[index]}`)
//     })
// }
// show_magicians()
// /////////////////////OR to Above
// const comment : string[] =  ["great"," Loser", "great","lappu"]
// let magiciansname1 : string[] = ["anthar","manthar","kala","kalanthar"]
// function showfunction() 
// {
//     const combine =   magiciansname1.map((value, index)=>(`${value} ${comment[index]}`))
//     return combine;
// }
// console.log(showfunction())

///===========================================================================


// var newcomment =  Array(4)
// newcomment.fill("the Great")
// var magArray =["anthar","manthar","kala","kalanthar"]
// magArray.map((val,index)=>{console.log(`${val},${newcomment[index]}`)})



/////====================================================================================
// var magArray =["anthar","manthar","kala","kalanthar"]
// var DupMagArray =[...magArray]   /////Duplicate

// function show_magicians(prefix : string[])  {
//     var gr = " "
//     for  (var p of DupMagArray){
//         gr+=`${p} ${prefix} \n `
//     }
//     return gr
// }
// console.log(show_magicians(["great"]));

// // var withg = show_magicians(["The Great"])
// //  var separateg =withg.split(" \n ")
// //  console.log(withg)

////////without array ///////////////////

// var magArray =["anthar","manthar","kala","kalanthar"]
// var DupMagArray =[...magArray]   /////Duplicate

// function show_magicians2(prefix : string)  {
//     var gr = " "
//     for  (var p of DupMagArray){
//         gr+=`${p} ${prefix} \n `
//     }
//     return gr
// }
// console.log(show_magicians2("great"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////





