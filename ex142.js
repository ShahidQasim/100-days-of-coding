//  Create a Promise that resolves with `Hello, World!` after 2 seconds.
let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello Dunya");
    }, 2000);
});
mypromise.then((message) => console.log(message));
export {};
