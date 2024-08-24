//Generate a date object representing your next birthday and log it to the console.
function baroodday(month, day) {
    let today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// const bdd=baroodday(11,10)
console.log("BD on ", baroodday(11, 10).toLocaleString());
export {};
// console.log(bdd.toLocaleString());
