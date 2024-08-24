// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function main(grade) {
    switch (grade) {
        case "A":
            console.log("amazing"); //also use "RETURN amazing "
            break;
        case "B":
            console.log("nice");
            break;
        default:
            console.log("invalid input");
    }
}
main("C");
export {};
