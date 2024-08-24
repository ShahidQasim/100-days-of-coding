//
var days;
(function (days) {
    days[days["sat"] = 0] = "sat";
    days[days["sun"] = 1] = "sun";
    days[days["mon"] = 2] = "mon";
    days[days["tue"] = 3] = "tue";
    days[days["wed"] = 4] = "wed";
    days[days["thurs"] = 5] = "thurs";
    days[days["friday"] = 6] = "friday";
})(days || (days = {}));
let today = days.sun;
console.log("today is", days[today]);
export {};
