//Explain how to handle errors in a callback pattern.

function datafetching(CB : (error :  Error|null , data? :String)=>void) : void {
    let error = new  Error("data fetching failed")
    let data ="got some data"
    if (Math.random()>0.5) {
        CB(null,data)
    }
    else {
        CB(error)
    }
}

datafetching((error,data)=>{
    if (error){
        console.error(error.message);
        
    }
    else {
        console.log(data);
        
    }
})