//INPUT PLAYERS' NAMES

var player1 = prompt("What's the name of Player 1?");
var player2 = prompt("What's the name of Player 2?");

//SET PLAYERS' NAME

document.querySelectorAll("h2")[0].textContent = player1;
document.querySelectorAll("h2")[1].textContent = player2;

//

//ROLLING DICE 1 FUNCTION

var randomNumber1;
var randomNumber2;

document.querySelector("button").addEventListener('click', function(){
    rollDice1();
    rollDice2();
    giveResults();
});

function rollDice1() {
  randomNumber1 = Math.floor((Math.random()*6) + 1);
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  return document.querySelector("img.img1").setAttribute("src", randomImageSource1);
};

//ROLLING DICE 2 FUNCTION


function rollDice2() {
  randomNumber2 = Math.floor((Math.random()*6) + 1);
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  return document.querySelector("img.img2").setAttribute("src", randomImageSource2);
};

//CHANGING TITLE FUNCTION

function giveResults() {
  if (randomNumber1 > randomNumber2) {
    return document.querySelector("h1").textContent = "🚩 " + player1+ " wins";
  } else if (randomNumber1 < randomNumber2) {
    return document.querySelector("h1").textContent = player2 + " wins 🚩";
  } else if (randomNumber1 === randomNumber2) {
    return document.querySelector("h1").textContent = "Draw";
  }
};
