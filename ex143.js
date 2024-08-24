// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
let Cpromise = new Promise((reslove, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        reslove("success");
    }
    else {
        reject(new Error("failure"));
    }
})
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
export {};
