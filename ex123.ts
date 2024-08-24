// Create a loop that iterates through a string and stops when it finds the first vowel.

function main(input : string) {
    let vowel= "aeiouAEIOU"
    for (const y of input) {
        if(vowel.includes(y)){
            console.log(`first vowel found ${y}`); 
            break 
        }
        console.log(y);   
        
    }
}
main("shahid")