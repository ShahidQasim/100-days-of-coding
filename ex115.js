// Use a switch statement to log the days of the week based on a number (1-7).
// function main(daynumber:  number) {
//     switch (daynumber){
//         case 1 :
//         console.log("monday");
//         break
//         case 2 :
//             console.log("tuesday");
//             break
//         case 3 :
//             console.log("wednesday");
//             break
//         case 4:
//             console.log("thursdy");
//             break
//         case 5 :
//             console.log("fridsay");
//             break
//         case 6 :
//             console.log("saturdaty");
//             break
//         case 7 :
//             console.log("sunday");
//             break
//         default :
//         console.log("enter vlaid day number");
//     }
// }
// main(4)
// main(6)
// main(1)
/////////////////////// ALTERNATE///////////////////////////
function main(daynumber) {
    switch (daynumber) {
        case 1:
            return "monday";
            break;
        case 2:
            return "tuesday";
            break;
        case 3:
            return "wednesday";
            break;
        case 4:
            return "thursdy";
            break;
        case 5:
            return "fridsay";
            break;
        case 6:
            return "saturdaty";
            break;
        case 7:
            return "sunday";
            break;
        default:
            console.log("enter vlaid day number");
    }
}
console.log(main(1));
console.log(main(2));
console.log(main(3));
console.log(main(4));
console.log(main(5));
console.log(main(6));
console.log(main(7));
export {};
