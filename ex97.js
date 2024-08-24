// Write a function that returns the current date in the format `DD-MM-YYYY`.
function main() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0"); /// using padstart is optional
    const month = String(now.getMonth()).padStart(2, "0");
    const year = String(now.getFullYear());
    return `${day}-${month}-${year}`;
}
console.log(main());
export {};
