// Compare `let` and `const`: Create two examples where `let` allows reassignment but `const` does not.
// Try to reassign a `const`-declared variable and catch the error.
let age = 67;
age = 34;
console.log(age);
////////////////////////////////////////////////
const name = "shahid";
try {
    // name="ali"    //  uncomment it for using it
}
catch {
    console.log("const cant br reassigned");
}
export {};
