// Write a function that checks if a Map contains a key for `Canada` and logs the capital if it exists.

let countries = new Map<string,string>()
countries.set("pakistan","islamabad")
countries.set("japan","tokyo")
countries.set("afghanistan","kabul")

function main(countries : Map<string,string>){
    if (countries.has("canada")){
        console.log(`the capital of canadais ${countries.get("canada")}`);
        
    }
    else{
        console.log("canada is  not in the list");
        
    }

}
main(countries)
