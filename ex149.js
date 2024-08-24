// Explain the concept of the event loop in JavaScript with an example.
console.log("initialization");
setTimeout(() => {
    console.log("printed after zero seconds");
}, 0);
console.log("ending");
console.log("ending prints before settimeout fn even with zero seconds, this is due to EVENT LOOP");
export {};
