'use strict';

///////////////////////////////////////////////
//What is DOM and DOM Manipulation?
///////////////////////////////////////////////
//DOM stands for Document Object Model. It is a structured representation of an HTML document. It is used to connect webpages to scripts like JavaScript. It is an object-oriented representation of the web page, which can be modified with a scripting language like JavaScript.

///////////////////////////////////////////////
//Selecting and Manipulating Elements
///////////////////////////////////////////////

//We can select and manipulate the elements of the HTML document by writing dom manipulation methods in the script.js file.

console.log(document.querySelector('.message').textContent); //This will select the message class only and logs it in console.
// document.querySelector('.message').textContent = 'Correct Number!'; //In this we selected the message class document and we changed the textContent from start guessing to correct Number!
console.log(document.querySelector('.message').textContent);

//This above process of changing HTML document or CSS styles without editing the HTML and CSS files directelky is called DOM manipulation.

document.querySelector('.number').textContent = "?";
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
//This will console the value of the guess class. but it will show empty as thers is nothing in that input element.

document.querySelector('.guess').value = ""; // This will add the value.
console.log(document.querySelector('.guess').value); // This will show the added value.

///////////////////////////////////////////////
//Handling Click Events
///////////////////////////////////////////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // Stae variable
let highscore = 0;
//Math.random() will give you any random number between 0 and 1. And multiplying it by any number will give you random numbers from 0 till that multipled number. suppose we multiple Math.ramdom() * 20 then it will give number from 0 to 19.999. And Math.trunc will rmove the decimals and give you integer from 0 to 19 and to get the number 20 we have to add 1.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);
  //   document.querySelector('.message').textContent = 'Correct Number!';

  // When there is no number.
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!'; // If guess has falsy number that is empty or 0 it will show the above message.
    displayMessage('No Number');

    // When player wins.
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too low!');
      score = score - 1; // score --;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // We merge the both guess > secretNumber and guess < secretNumber into one as shown above.
  // When guess is too high.
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score = score - 1; // score --;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //When guess is too low.
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--; // score -- = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;

  // }
});
// This will console the number we wrote in gues box as soon as we click check button.

//////////////////////////////////////////
// Coding Challange #1

/* 
Implement a reset game functionality, so that the player can make a new guess! Here is how:

1. Select the element with the "again class and attach a click event handler
2. In the handler function, restore initial values of the score and Secretnumber variables.
3. Restore the initial conditions of the message, number, score and guess input field.
4. Also restore the original background color (#222) and number width (15rem).
*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
});
