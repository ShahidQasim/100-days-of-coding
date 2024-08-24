//Create a function that assigns a grade (A, B, C, D, F) based on a students score.
function main(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
}
console.log(main(95));
console.log(main(75));
console.log(main(65));
export {};
