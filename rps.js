

let n;
let m;
let plScore = 0;
let pcScore = 0;
let i;
let scores;
let resultText ;
let gameover;


function computerPlay() {

   n = Math.floor(Math.random() * 2) + 1;

   
   

   if (n == 1) {

    console.log("My answer is ROCK!");
    document.getElementById("pcChoice").innerHTML = ("My answer is ROCK!");

}  else if (n==2) {

    console.log("My answer is PAPER!");
    document.getElementById("pcChoice").innerHTML = ("My answer is PAPER!");

} else {
     
     console.log("My answer is SCISSORS!");
     document.getElementById("pcChoice").innerHTML = ("My answer is SCISSORS!");

}
}

function playRound(n,m) {


if ( n == 1 && m == 2) {
    console.log("You win! Paper beats Rock.");
    document.getElementById("gameresults").innerHTML = ("You win! Paper beats Rock.");
    
    plScore = plScore+1;
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else if (n==2 && m==1) {
    console.log("You lose! Paper beats Rock.");
    document.getElementById("gameresults").innerHTML = ("You lose! Paper beats Rock.");
    
    pcScore = pcScore+1;
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else if (n==2 && m==3) {
    console.log("You win! Scissors beats Paper.");
    document.getElementById("gameresults").innerHTML = ("You win! Scissors beats Paper.");
    
    plScore = plScore+1;
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else if (n==3 && m==2) {
    console.log("You lose! Scissors beats Paper.");
    document.getElementById("gameresults").innerHTML = ("You lose! Scissors beats Paper.");
    
    pcScore = pcScore+1;
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else if (n==3 && m==1) {
    console.log("You win! Rock beats Scissors.");
    document.getElementById("gameresults").innerHTML = ("You win! Rock beats Scissors.");
    
    plScore = plScore+1;
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else if (n==1 && m==3) {
    console.log("You lose! Rock beats Scissors.");
    document.getElementById("gameresults").innerHTML = ("You lose! Rock beats Scissors.");
    
    pcScore = pcScore+1;
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else if (n==1 && m==1) {
    console.log("Oh. That's a tie.");
    document.getElementById("gameresults").innerHTML = ("Oh. That's a tie.");
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else if (n==2 && m==2) {
    console.log("Oh. That's a tie.");
    document.getElementById("gameresults").innerHTML = ("Oh. That's a tie.");
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else if (n==3 && m==3) {
    console.log("Oh. That's a tie.");
    document.getElementById("gameresults").innerHTML = ("Oh. That's a tie.");
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
}

else  {
    console.log("Bir şeyler yanlış gitti")
}

}


    
function startGameRound()   {

    

answer = prompt("Rock,Paper or Scissors?","");

console.log("Your choice is"+" "+ answer.toUpperCase() );

computerPlay();


if  ( answer.toUpperCase() == "ROCK" ) { 

    m=1;
    playRound(n,m);

}

else if ( answer.toUpperCase() == "PAPER" ) { 

    m=2;
    playRound(n,m);

}

else if  ( answer.toUpperCase() == "SCISSORS" ) { 

    m=3;
    playRound(n,m);

}

else {

alert("You can only write; Rock, Paper or Scissors! Please try again.")
startGameRound()

}

}

function game()  {

for (i = 0; i < 5; i++) {

startGameRound()

}


    if (pcScore>plScore) {
        gameover = ("YOU LOST")
    }
    else if (plScore>pcScore) {

        gameover= ("YOU WIN")
    }

    else if (plScore==pcScore) {

        gameover = ("TIE")
    }
    document.getElementById("gameresults").innerHTML = (gameover);
    document.getElementById("scores").innerHTML = ("You:"+plScore+" "+"Pc:"+pcScore) ;
    document.getElementById("pcChoice").innerHTML = ("Please refresh the page to play again.");

console.log("My Score:" + " " + pcScore + " ")
console.log("Your Score:" + " " + plScore + " ")



}





