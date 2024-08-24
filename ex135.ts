//  Explain how you can format a JSON string with proper indentation for readability.

let credentials = {
    name : "shahid",
    age :  26,
    school : "ussi"
}
console.log(JSON.stringify(credentials,null,1));  //lst is space
