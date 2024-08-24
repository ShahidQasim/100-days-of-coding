// Determine if a given year is a leap year using comparison operators.

function leapyear(year: number)  {
    return (year%4===0 && year%100!==0)  ||  (year%400===0)
}
console.log(leapyear(2020));
console.log(leapyear(2024));
console.log(leapyear(2023));



