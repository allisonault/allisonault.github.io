// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.

var humanScore = 0;
var computerScore = 0;
var humanBestOfThreeScore = 0;
var computerBestOfThreeScore = 0;

// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Write all the code below INSIDE the function curly braces!!

// Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
// For example: "You played rock. The bot played scissors."

// If the human play is equal to the computer play
  // Log "You tied. :|" to the console.
// Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
// humanPlay is 'rock' and the computerPlay is 'scissors' OR
// humanPlay is 'scissors' and the computerPlay is 'paper'
  // Log "You win! :)" to the console
  // Add one to the humanScore variable (be sure to use += )
// Otherwise log "You lose! :(" to the console
  // Add one to the computerScore variable (be sure to use += )


function play (humanPlay, computerPlay) {
  console.log("You played " + humanPlay + " The bot played " + computerPlay + ".");
  if (humanPlay === computerPlay) {
    console.log("You tied.");
  } else if (humanPlay === "paper"  && computerPlay === "rock" || humanPlay === "rock"  && computerPlay === "scissors" || humanPlay === "scissors" && computerPlay === "paper") {
    humanScore += 1;
    console.log("You win! " + humanScore);
  } else {
    computerScore += 1;
    console.log("You lose! " + computerScore);
  }
  console.log("You have " + humanScore + " points");
  console.log("Bot has " + computerScore + " points");
}

// END OF FUNCTION (Place the closing curly brace here!)

// Log "You have {humanScore} points" to the console
// For example: "You have 0 points"
// Log "The bot has {computerScore} points" to the console.
// For example: "The bot has 3 points"

// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.

// play(humanScore, computerScore);
play("rock", "scissors")
play("paper", "rock")
play("scissors", "paper")
play("scissors", "rock")
play("rock", "paper")
play("paper", "scissors")

// BONUS:
// Create a "best of 3" version

function checkBestOfThree () {
  if (humanBestOfThreeScore = 2) {
    humanBestOfThreeScore = 0;
    computerBestOfThreeScore = 0;
    humanScore += 1;
    console.log('Human won best of three');
    console.log('humancore: ' + humanScore + ' | Computer Score: ' + computerScore);
  }
  if (computerBestOfThreeScore = 2) {
    humanBestOfThreeScore = 0;
    computerBestOfThreeScore = 0;
    computerScore += 1;
    console.log('computer won the best of three');
    console.log('Human Score:' + humanScore + ' | Computer Score: ' + computerScore);
  }
}

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.

function play (humanPlay) {
  var computerPlay = Math.random();
  if (computerPlay < 0.34) {
    computerPlay = "rock";
  } else if(computerPlay <= 0.67) (
     computerPlay = "paper";
  } else {
      computerPlay = "scissor";
  }

  if (humanPlay == computerPlay) {
    console.log('tie');
  } else if (humanPlay == "rock" && computerPlay == 'scissor' || humanPlay == "paper" && computerPlay == 'rock' || humanPlay == "scissor" || computerPlay == 'paper') {
    console.log('homan win');
    humanBestOfThreeScore += 1;
  } else {
    console.log('computer win');
    computerBestOfThreeScore += 1;
  }
  console.log('Human played ' + humanPlay + ' and Computer played ' + computerPlay);
  console.log('Human best of three score: ' + humanBestOfThreeScore);
  console.log('Computer best of three score: ' + computerBestOfThreeScore);
  checkBestOfThree();

}
