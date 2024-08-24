// {
// let currentUsernames : string[] = ["shahid","farhan","ali","tabish"]
// let newUsrnames : string[]= [...currentUsernames]
// newUsrnames.push("farhan")
// newUsrnames.unshift("waqas")
// newUsrnames.splice(newUsrnames.length/2,0,"sheikh")
// newUsrnames.splice(2,0,"charad")
// for (let i = 0; i < newUsrnames.length; i++) {
//     if (newUsrnames[i]==="shahid"||newUsrnames[i]=== "SHAHID"||newUsrnames[i]=== "FARHAN" || newUsrnames[i]==="farhan" ||newUsrnames[i]=== "ali"|| newUsrnames[i]==="ALI" || newUsrnames[i]==="TABISH"|| newUsrnames[i]==="tabish"){
//         console.log(`${newUsrnames[i]} is not  available`);
//     }
//     else{
//         console.log(`${newUsrnames[i]} is available`);
//     }
// }
// }
////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////
{
    let currentUsernames = ["Shahid", "Farhan", "ali", "TABISH"];
    let newUsrnames = [...currentUsernames];
    newUsrnames.push("jameel");
    newUsrnames.unshift("waqaS");
    newUsrnames.splice(newUsrnames.length / 2, 0, "sheikh");
    newUsrnames.splice(2, 0, "chaRad");
    var currentuser = currentUsernames.map(uu => uu.toLowerCase());
    //
    //var newuser=newUsrnames.map(ii=>ii.toLowerCase())
    for (var users of newUsrnames) {
        var available = true;
        var newuser = users.toLowerCase();
        for (var current of currentuser) {
            if (current === newuser) {
                available = false;
                break;
            }
        }
        if (available) {
            console.log(`${newuser} is  available`);
        }
        else {
            console.log(`${newuser} is not  available`);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // let currentUsernames : string[] = ["shahid","farhan","ali","tabish"]
    // let newUsrnames : string[]= ["ali", "waqas","tabish","abdul","shahid"]
    // newUsrnames.push("jameel")
    // for (let i = 0; i < newUsrnames.length; i++) {
    //     if (newUsrnames[i]==="shahid"||newUsrnames[i]=== "SHAHID"||newUsrnames[i]=== "FARHAN" || newUsrnames[i]==="farhan" ||newUsrnames[i]=== "ali"|| newUsrnames[i]==="ALI" || newUsrnames[i]==="TABISH"|| newUsrnames[i]==="tabish"){
    //         console.log(`${newUsrnames[i]} is not  available`);
    //     }
    //     else{
    //         console.log(`${newUsrnames[i]} is available`);
    //     }
    // }
    /////////////////////////////////////////////////////////////////////////////////////////////
    // 
    //SCRAAPPPPPPPPPPPP/////////////////////////
    //{
    // let currentUsernames : string[] = ["Shahid","Farhan","ali","TABISH"]
    // let newUsrnames : string[]= [...currentUsernames]
    // newUsrnames.push("jameel")
    // newUsrnames.unshift("waqaS")
    // newUsrnames.splice(newUsrnames.length/2,0,"sheikh")
    // newUsrnames.splice(2,0,"chaRad")
    // //var currentuser =currentUsernames.map(uu=>uu.toLowerCase())
    // var newuser =newUsrnames.map((ii : string) =>ii.toLowerCase())
    //  for (let i = 0; i < newuser.length; i++) {
    //     //varcurrentUsernames[i] : any=currentUsernames[i].toLowerCase()
    //     currentUsernames[i] =currentUsernames[i].map(uu=>uu.toLowerCase())
    //         if (newuser[i]===currentUsernames[i])   {
    //             console.log(`${newuser[i]} is not  available`);
    //         }
    //         else{
    //             console.log(`${newuser[i]} is available`);
    //         }
    //     }
}
export {};
