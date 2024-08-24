// Implement a try-catch block to handle potential errors in a block of code.
try {
    throw new Error("some thing went wrong");
}
catch (error) {
    console.log(error.message);
}
export {};
