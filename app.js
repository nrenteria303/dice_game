var randomNumber1;
var randomNumber2;
const diceImg1 = document.querySelectorAll('.img1')[0];
const diceImg2 = document.querySelectorAll('.img2')[0];
const rollBtn = document.querySelector('button');
var diceImgs = [diceImg1, diceImg2];
var randomNumbers = [randomNumber1, randomNumber2];


function rollDice() {
    randomNumber1 = Math.floor(Math.random() * 6 + 1);
    diceImg1.setAttribute('src', "images/dice" + randomNumber1 + ".png");
    randomNumber2 = Math.floor(Math.random() * 6 + 1);
    diceImg2.setAttribute('src', "images/dice" + randomNumber2 + ".png");
    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = "🏆 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = "Player 2 wins! 🏆";
    }  else {
        document.querySelector('h1').innerHTML = "It's a draw!";
    }
}

rollBtn.addEventListener('click', rollDice);
