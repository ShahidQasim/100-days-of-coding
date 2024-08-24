// Create a switch case that matches several cases to the same code block, representing seasons.
function main(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log("winter"); ///also u can use "RETURN winter "
            break;
        case 3:
        case 4:
        case 5:
            console.log("spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("atutumn/fall");
            break;
        default:
            console.log("invalid entry");
    }
}
main(2);
main(4);
main(7);
main(10);
export {};
