//create a random choice for the computer
function computerChoice(){
    let x = Math.floor((Math.random() * 3) + 1);
    if(x==1){
        return 'rock';
      }
      else if(x==2){
        return 'paper';
      }
      else if(x==3){
        return 'scissors';
      }
  }

//play a single round of rock paper scissors
function oneround(){
    let computer = computerChoice();
    let user = prompt("Please enter your choice: rock, paper or scissors");
    user = user.toLowerCase();
    console.log(user);
}

//get the choice from computer
//get the choice from user
//return the winner of the round

//play 5 rounds of rock paper scissors
