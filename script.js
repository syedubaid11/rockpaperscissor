computerSelection=0
playerChoice=0


function getcomputerChoice(){

    let generatedNumber=Math.floor(Math.random()*4)
    if (generatedNumber==1){
        computerSelection="rock";
    }
    if (generatedNumber==2){
        computerSelection="paper";
    }    
    if (generatedNumber==3){
        computerSelection="scissor";
    }
    return computerSelection;
}

function playerSelection(){
    var playerChoice=prompt("Enter your choice (R,P,S)")
    return playerChoice;

}

function playround(getcomputerChoice,playerSelection){
    if (getcomputerChoice=="scissor"){
        if (playerChoice=="R")
        return("its a draw");   
}
}

function test(getcomputerChoice){

}