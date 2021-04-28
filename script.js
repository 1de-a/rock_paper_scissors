 
 let randomNum;
 let plScore = 0;
 let pcScore = 0;
 


 

 function scoreBoard () {

    
     let liste = document.createElement("li"); 
     let scores = document.createTextNode(plScore + " " + "-" + " " + pcScore);
    liste.appendChild(scores);
    document.getElementById("gameLog").appendChild(liste); 

 }

 



 function computerPlay() {

    randomNum = Math.floor(Math.random() * 3) + 1;
 
 
    if (randomNum == 1) {
 
     console.log("My answer is ROCK!");
     document.getElementById("pcScissors").style.visibility = "hidden";
     document.getElementById("pcPaper").style.visibility = "hidden";
     document.getElementById("pcRock").style.visibility = "visible";
     
     
 
 }  else if (randomNum==2) {
 
     console.log("My answer is PAPER!");
     document.getElementById("pcScissors").style.visibility = "hidden";
     document.getElementById("pcPaper").style.visibility = "visible";
     document.getElementById("pcRock").style.visibility = "hidden";
  
 
 } else {
      
      console.log("My answer is SCISSORS!");
      
      document.getElementById("pcScissors").style.visibility = "visible";
     document.getElementById("pcPaper").style.visibility = "hidden";
     document.getElementById("pcRock").style.visibility = "hidden";
      
 
 }
 }



 function gameOver()  {

if ( plScore == 3) {

    console.log("You won the game!");
    document.getElementById("finalScore").innerHTML = ("The final score is " + plScore + " - " + pcScore + ". You Won The Game!");
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "hidden";
    document.getElementById("btn4").style.visibility = "hidden";
    document.getElementById("btn5").style.visibility = "hidden";
    document.getElementById("btn6").style.visibility = "hidden";
    
    document.getElementById("restartBtn").style.visibility = "visible";
    
    
    
}

else if ( pcScore == 3 )  {

    console.log("You lost the game!");
    document.getElementById("finalScore").innerHTML = ("The final score is " + plScore + " - " + pcScore + ". You Lost The Game!");
    document.getElementById("btn1").style.visibility = "hidden";
    document.getElementById("btn2").style.visibility = "hidden";
    document.getElementById("btn3").style.visibility = "hidden";
    document.getElementById("btn4").style.visibility = "hidden";
    document.getElementById("btn5").style.visibility = "hidden";
    document.getElementById("btn6").style.visibility = "hidden";
    
    document.getElementById("restartBtn").style.visibility = "visible";
    
    
}
else console.log("go on")



 }


 function buttonRock() {

 computerPlay();
 document.getElementById("plRock").style.visibility = "visible";
 document.getElementById("plPaper").style.visibility = "hidden";
 document.getElementById("plScissors").style.visibility = "hidden";

 if (randomNum == 2) {

 pcScore = pcScore + 1;
 console.log("you lost this round");
 document.getElementById("finalScore").innerHTML = ("You lost this round.");
 
 scoreBoard();
 
 
 
 gameOver()

 } 

 else if (randomNum == 3) {

    plScore = plScore + 1;
    console.log("you won this round");
    document.getElementById("finalScore").innerHTML = ("You won this round.");
    scoreBoard();
    
    gameOver()
 }

 else if (  randomNum == 1 ) {

    console.log("it's a tie.");
    document.getElementById("finalScore").innerHTML = ("it's a tie.");
    
    
    gameOver()
 }

 else { alert("A Huge Error!")};


 

 } 

 function buttonPaper() {

    computerPlay();
    //document.getElementById("plIcon").innerHTML = ("PAPER");
    document.getElementById("plRock").style.visibility = "hidden";
    document.getElementById("plPaper").style.visibility = "visible";
    document.getElementById("plScissors").style.visibility = "hidden";
   
    if (randomNum == 2) {
   
        console.log("it's a tie.");
        document.getElementById("finalScore").innerHTML = ("it's a tie.");
        
        
        gameOver()
    
   
    } 
   
    else if (randomNum == 3) {
   
      
       pcScore = pcScore + 1;
    console.log("you lost this round");
    document.getElementById("finalScore").innerHTML = ("You lost this round.");
    scoreBoard();
   
    gameOver()
    }
   
    else if (  randomNum == 1 ) {
        plScore = plScore + 1;
        console.log("you won this round");
        document.getElementById("finalScore").innerHTML = ("You won this round.");
        scoreBoard();
        
        gameOver()
       
    }
   
    else { alert("A Huge Error!")};
   
   
    
   
    }

    function buttonScissors() {

        computerPlay();
        
        document.getElementById("plRock").style.visibility = "hidden";
        document.getElementById("plPaper").style.visibility = "hidden";
        document.getElementById("plScissors").style.visibility = "visible";
       
        if (randomNum == 2) {
       
       
        plScore = plScore + 1;
        console.log("you won this round");
        document.getElementById("finalScore").innerHTML = ("You won this round.");
        scoreBoard();
        
        gameOver()
       
        } 
       
        else if (randomNum == 3) {
       
           
           console.log("it's a tie.");
           document.getElementById("finalScore").innerHTML = ("it's a tie.");
           
           
           gameOver()
        }
       
        else if (  randomNum == 1 ) {
            pcScore = pcScore + 1;
            console.log("you lost this round");
            document.getElementById("finalScore").innerHTML = ("You lost this round.");
            scoreBoard();
            
            gameOver()
           
        }
       
        else { alert("A Huge Error!")};
       
       
        
       
        }

        function restartGame()  {

            location.reload();
        }