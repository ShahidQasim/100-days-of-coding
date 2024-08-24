// Describe how asynchronous callbacks differ from synchronous code execution.

console.log("sync operation");
for (let i = 0; i < 2e10; i++) {}
console.log("sync operation ended");

console.log("async operation");
setTimeout(() => {
    console.log("async is executed");
    
}, 2000);
console.log("async ended");



// Demonstrates how the rest of the code continues 
// to execute without waiting for the asynchronous operation.