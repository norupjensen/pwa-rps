
let userScore = 0;
let compScore = 0;
//elements from the DOM
const _userScore_span = document.getElementById("user-score");
const _compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComuperChoice(){
  const choices = ['rock','paper','scissor'];
  randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convertToWord(word){
  if (word === "rock") return "Rock";
  if (word === "paper") return "Paper";
  return "Scissor";
}


function win(userChoice,computerChoice){
  userScore ++;
  _userScore_span.innerHTML = userScore;
  _compScore_span.innerHTML = compScore;
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallcompWord = "(comp)".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice).parentElement;
  result_p.innerHTML = convertToWord(userChoice) +smallUserWord+" beats " + convertToWord(computerChoice) +smallcompWord+". You win! 🔥 ";
  userChoice_div.classList.add('green-glow');
  setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 400);
}

function loose(userChoice,computerChoice){
  compScore ++;
  _userScore_span.innerHTML = userScore;
  _compScore_span.innerHTML = compScore;
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallcompWord = "(comp)".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice).parentElement;
  result_p.innerHTML = convertToWord(userChoice) +smallUserWord+" losses to " + convertToWord(computerChoice) +smallcompWord+". You lost! 💩 ";
  userChoice_div.classList.add('red-glow');
  setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 400);
}

function tied(userChoice,computerChoice){
  _userScore_span.innerHTML = userScore;
  _compScore_span.innerHTML = compScore;
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallcompWord = "(comp)".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice).parentElement;
  result_p.innerHTML = convertToWord(userChoice) +smallUserWord+" equals " + convertToWord(computerChoice) +smallcompWord+". Its a draw! 😑 ";
  userChoice_div.classList.add('grey-glow');
  setTimeout(function(){userChoice_div.classList.remove('grey-glow')}, 400);
}


function game(userChoice){
  console.log('User: ' + userChoice);
  const computerChoice = getComuperChoice();
  console.log('Computer: ' + computerChoice);

  switch (userChoice + computerChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      console.log('user wins!');
      win(userChoice,computerChoice);
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      console.log('computer wins!');
      loose(userChoice,computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      console.log('its a draw');
      tied(userChoice,computerChoice);
      break;
  }
}

function main(){
  //click handlers
  rock_div.addEventListener('click', function(){
    game("rock");
  })

  paper_div.addEventListener('click', function(){
    game("paper");
  })

  scissor_div.addEventListener('click', function(){
    game("scissor");
  })

}

main();
/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
  */
/*
if (this.state === 'activated') {
  document.getElementById('offlineNotification').classList.remove('hidden');
}
*/
