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
//get the choice from computer
    let computer = computerChoice();
//get the choice from user
    let user = prompt("Please enter your choice: rock, paper or scissors");
    user = user.toLowerCase();
    console.log('user chose '+user);
    console.log('computer chose '+computer);
//return the winner of the round
    if(computer=='rock' && user=='paper' || computer=='paper' && user=='scissors' || computer=='scissors' && user=='rock'){
        return 'user won';
    }
    else if(computer == user){
        return 'tie';
    }
    else{
        return 'computer won';
    }
}

//play 5 rounds of rock paper scissors
function game(){
    for(let i=0;i<5;i++){
        let game = oneround();
        if(game=='user won'){
            console.log('user won');
        }
        else if(game=='computer won'){
            console.log('computer won');
        }
        else if(game=='tie'){
            console.log('its a tie');
        }
    }
}

game();