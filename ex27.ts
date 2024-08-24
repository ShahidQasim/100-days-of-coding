{let alienColor : string[] =["red","yellow","green"]
    for (let i = 0; i < alienColor.length; i++) {
        if (alienColor[i]==="green") {
            console.log("you earn 5 points for shooting GREEN alien")
            
        }
        else  if(alienColor[i]==="yellow")
        {
             console.log("you earn 10 points for shooting YELLOW alien")
            
        }
        else  if(alienColor[i]==="red")
            {
                 console.log("you earn 15 points for shooting RED alien")
                
            }
        else{}
            }
        }

        //========================================================================
        console.log("=".repeat(100));

        console.log("FOR GREEN")

        let alien_color : string = "green"
        if (alien_color==="green") {
            console.log("you just earned 5 points")
        }
        else if (alien_color==="red") {
            console.log("you just earned 10 points")
        } else if (alien_color ==="white") {
            console.log("you just earned 15 points")
        }
        else {
            console.log("game over")
        }
        
        
        console.log("FOR RED")
        
        alien_color = 'red'
        if (alien_color==="green") {
            console.log("you just earned 5 points")
        }
        else if (alien_color==="red") {
            console.log("you just earned 10 points")
        } else if (alien_color ==="white") {
            console.log("you just earned 15 points")
        }
        else {
            console.log("game over")
        }
        
        
        console.log("FOR WHITE")
        alien_color = 'white'
        if (alien_color==="green") {
            console.log("you just earned 5 points")
        }
        else if (alien_color==="red") {
            console.log("you just earned 10 points")
        } else if (alien_color ==="white") {
            console.log("you just earned 15 points")
        }
        else {
            console.log("game over")
        }
        
        
        console.log("FOR GREY")
        alien_color = 'grey'
        if (alien_color==="green") {
            console.log("you just earned 5 points")
        }
        else if (alien_color==="red") {
            console.log("you just earned 10 points")
        } else if (alien_color ==="white") {
            console.log("you just earned 15 points")
        }
        else {
            console.log("game over")
        }



        console.log("=".repeat(100));
//////////////////////////////////////////////////////////////////////////////
    {
        let alien_color="green";

if(alien_color==="green"){
    //  change color 
    console.log( "\u001b[1;32m Player just earn 5 points" );
    
    
}
else if(alien_color==="red")
{
    console.log( "\u001b[1;31m Player just earn 15 points " );

}

else if(alien_color==="yellow"){
    console.log( "\u001b[1;33m Player just earn 10 points" );
    
}
else{

}
//  default Foreground color

console.log( "\u001b[0m " );
    }