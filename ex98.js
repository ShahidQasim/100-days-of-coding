//Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysleft() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // format const yy = new Date(year, month-1, day)
    //const newYear = new Date(today.getFullYear(),11,32);  ///ALTERNATE //format const yy = new Date(year, month, day)
    let difference = newYear.getTime() - today.getTime();
    var days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysleft(), "days left");
export {};
