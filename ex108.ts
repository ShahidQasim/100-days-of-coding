//Compare two strings to check if they are identical, ignoring case sensitivity.

function main(str1 : String, str2 : String) {
return str1.toLowerCase() === str2.toLowerCase()
}
console.log(main("hello","Hello"))
console.log(main("ello","Hello"));
