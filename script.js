//player choice
function main(){
var playerChoice=prompt("what is your choice: rock , paper , scissor");

//computer choice

var computerChoice = Math.ceil(Math.random() *3);

if (computerChoice < 1) {
    computerChoice = "rock";
} else if(1 <= computerChoice <= 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissor";
}

//defining function

function game(playerChoice,computerChoice){
    //checking for tie
if(playerChoice==computerChoice){
    return("It's a tie")
}
if(playerChoice=="rock"){
    if(computerChoice="paper"){
        return("Player wins")
    }else{
        return("Computer wins")
    }
}
if(playerChoice=="paper"){
    if(computerChoice=="scissor"){
        return("computer wins!")
    }else{
        return("player wins")
    }
if(playerChoice=="scissor"){
    if(computerChoice=="rock"){
        return("computer wins!")
    }else{
        return("player wins!")
    }
}    
}
}

}
console.log(game(playerChoice,computerChoice))