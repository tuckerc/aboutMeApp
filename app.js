'use strict';


/****************************************************************
 * File name - app.js
 * Author - Chase Tucker
 * Description - this jS file supports the logic and iteraction for the aboutMeapp.
 * Date - 10-3-2019
 ***************************************************************/

// var to keep track of total correct answers
var totalCorrect = 0;

// qustion 1
function q1() {
  document.getElementById('fact1').children[0].style.visibility = 'visible';
  msg = 'True or false: King Ranch Chicken Caserole is my favorite thing to eat.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'true' || response === 't') {
    alert('That\'s correct!');
    // console.log(response+'. That\'s correct!');
    document.getElementById('fact1').children[1].style.visibility = 'visible';
    document.getElementById('fact1').style.backgroundColor = 'green';
    totalCorrect++;
  }
  else if (response === 'false' || response === 'f') {
    alert('I thought you knew me better!');
    // console.log(response + '. I thought you knew me better!');
    document.getElementById('fact1').children[1].style.visibility = 'visible';
    document.getElementById('fact1').style.backgroundColor = 'red';
  }
  else {
    alert('Please answer true or false');
    // console.log(response);
    document.getElementById('fact1').children[1].style.visibility = 'visible';
    document.getElementById('fact1').style.backgroundColor = 'red';
  }
}

// question 2
function q2() {
  document.getElementById('fact2').children[0].style.visibility = 'visible';
  msg = 'True or false: I was born in Aurora, CO.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'true' || response === 't') {
    alert('That\'s correct!');
    // console.log(response + '. That\'s correct!');
    document.getElementById('fact2').children[1].style.visibility = 'visible';
    document.getElementById('fact2').style.backgroundColor = 'green';
    totalCorrect++;
  }
  else if (response === 'false' || response === 'f') {
    alert('I thought you knew me better!');
    // console.log(response + '. I thought you knew me better!');
    document.getElementById('fact2').children[1].style.visibility = 'visible';
    document.getElementById('fact2').style.backgroundColor = 'red';
  }
  else {
    alert('Please answer true or false');
    // console.log(response);
    document.getElementById('fact2').children[1].style.visibility = 'visible';
    document.getElementById('fact2').style.backgroundColor = 'red';
  }
}

// question 3
function q3() {
  document.getElementById('fact3').children[0].style.visibility = 'visible';
  msg = 'True or false: I have 5 siblings.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'false' || response === 'f') {
    alert('That\'s correct!');
    // console.log(response + '. That\'s correct!');
    document.getElementById('fact3').children[1].style.visibility = 'visible';
    document.getElementById('fact3').style.backgroundColor = 'green';
    totalCorrect++;
  }
  else if ((response === 'true' || response === 't')) {
    alert('I thought you knew me better!');
    // console.log(response + '. I thought you knew me better!');
    document.getElementById('fact3').children[1].style.visibility = 'visible';
    document.getElementById('fact3').style.backgroundColor = 'red';
  }
  else {
    alert('Please answer true or false');
    // console.log(response);
    document.getElementById('fact3').children[1].style.visibility = 'visible';
    document.getElementById('fact3').style.backgroundColor = 'red';
  }
}

// question 4
function q4() {
  document.getElementById('fact4').children[0].style.visibility = 'visible';
  msg = 'True or false: My favorite color is blue.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'false' || response === 'f') {
    alert('That\'s correct!');
    // console.log(response + '. That\'s correct!');
    document.getElementById('fact4').children[1].style.visibility = 'visible';
    document.getElementById('fact4').style.backgroundColor = 'green';
    totalCorrect++;
  }
  else if ((response === 'true' || response === 't')) {
    alert('I thought you knew me better!');
    // console.log(response + '. I thought you knew me better!');
    document.getElementById('fact4').children[1].style.visibility = 'visible';
    document.getElementById('fact4').style.backgroundColor = 'red';
  }
  else {
    alert('Please answer true or false');
    // console.log(response);
    document.getElementById('fact4').children[1].style.visibility = 'visible';
    document.getElementById('fact4').style.backgroundColor = 'red';
  }
}

// question 5
function q5() {
  document.getElementById('fact5').children[0].style.visibility = 'visible';
  msg = 'True or false: I grew up in Texas.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'true' || response === 't') {
    alert('That\'s correct!');
    // console.log(response + '. That\'s correct!');
    document.getElementById('fact5').children[1].style.visibility = 'visible';
    document.getElementById('fact5').style.backgroundColor = 'green';
    totalCorrect++;
  }
  else if (response === 'false' || response === 'f') {
    alert('I thought you knew me better!');
    // console.log(response + '. I thought you knew me better!');
    document.getElementById('fact5').children[1].style.visibility = 'visible';
    document.getElementById('fact5').style.backgroundColor = 'red';
  }
  else {
    alert('Please answer true or false');
    // console.log(response);
    document.getElementById('fact5').children[1].style.visibility = 'visible';
    document.getElementById('fact5').style.backgroundColor = 'red';
  }
}

// question 6
function q6() {
  document.getElementById('fact6').children[0].style.visibility = 'visible';
  var correct = false; // var to determine if user still hasn't answered right
  document.getElementById('fact6').style.backgroundColor = 'red';
  for (var k = 1; k < 5 && correct === false; k++) {
    msg = 'How many kids do I have?';
    response = prompt(msg);
    if (Number(response)) {
      response = Number(response);
      if (response === 3) {
        // console.log(response + '. You got it!');
        alert('That\'s right. All boys!');
        document.getElementById('fact6').style.backgroundColor = 'green';
        correct = true;
        totalCorrect++;
      }
      else if (response < 3) {
        alert('Too low. Try again. You have ' + (4 - k) + ' attempts remaining.');
        // console.log(response + '. Too low. Try again.');
      }
      else {
        // console.log(response + '. Too high. Try again.');
        alert('Too high. Try again. You have ' + (4 - k) + ' attempts remaining.');
      }
    }
    else {
      // console.log('Numbers only please.'):
      alert('Please answer with a number.');
    }
  }
  if (correct === false) {
    alert('I have 3 kids. All of them boys!');
  }
}

// question 7
function q7() {
  var cities = ['eugene', 'missoula', 'salt lake city', 'tahoe', 'el segundo', 'anaheim', 'san antonio', 'austin', 'houston', 'dallas', 'oklahoma city', 'kansas city', 'atlanta', 'panama city'];
  document.getElementById('fact7').children[0].style.visibility = 'visible';
  var correct = false; // var to determine if user still hasn't answered right
  document.getElementById('fact7').style.backgroundColor = 'red';
  for (var l = 1; l < 7 && correct === false; l++) {
    msg = 'Which major U.S. cities outside of Washington have I visited?';
    response = prompt(msg);

    // input cleaning
    response = String(response);
    response = response.toLowerCase();
    // console.log('response: ' + response);

    // loop to check if input is in array
    for (var m = 0; m < cities.length && correct === false; m++) {
      if (response === cities[m]) {
        alert(cities[m] + '. You guessed it!');
        document.getElementById('fact7').style.backgroundColor = 'green';
        document.getElementById('fact7').style.visibility = 'visible';
        correct = true;
        totalCorrect++;
        // console.log(cities[m] + '. You got it!');
      }
    }
    if (correct === false) {
      alert('Sorry friend. I have never been to ' + response + '. You have ' + (7 - l) + ' attempts remaining.');
    }
  }
  alert('Here are all the possible correct answers: ' + cities);
}

// Hide html table sections for all questions
for (var i = 1; i < 8; i++) {
  var currentFact = 'fact' + i;
  var currentElement = document.getElementById(currentFact);
  for (var j = 0; j < currentElement.children.length; j++) {
    currentElement.children[j].style.visibility = 'hidden';
  }
}

/****************************************************************
 * Begin quiz section
 ***************************************************************/

//establish variables
var response, msg;

//gain consent to start quiz
msg = 'Would you like to take a quiz about Chase?';
response = confirm(msg);
if (response === true) {

  // greet user
  msg = 'What is your name?';
  var userName = prompt(msg);
  alert('Welcome to the game ' + userName + '. Enjoy!');

  q1();
  q2();
  q3();
  q4();
  q5();
  q6();
  q7();

  // update total correct answers on html
  document.getElementById('totalRight').textContent = totalCorrect;

  // Say goodbye!
  alert('Thanks for playing ' + userName + '. You answered ' + totalCorrect + ' questions correct!');
}


