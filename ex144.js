// Explain the use of the Promise.all() method with an example.
let Promise1 = Promise.resolve(1997);
let Promise2 = "november";
let Promise3 = new Promise((resolve) => {
    setTimeout(resolve, 2000, "my birthday");
});
Promise.all([Promise1, Promise2, Promise3]).then((result) => console.log(result));
export {};
