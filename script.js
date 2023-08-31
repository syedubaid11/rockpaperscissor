function getcomputerChoice(){

    let generatedNumber=Math.floor(Math.random()*4)
    if (generatedNumber=1){
        computerSelection="rock";
    }
    if (generatedNumber=2){
        computerSelection="paper";
    }    
    if (generatedNumber=3){
        computerSelection="scissor";
    }
    return computerSelection;
}
