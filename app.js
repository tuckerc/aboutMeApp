'use strict';

// Hide html table sections for all questions
for(var i = 1; i < 6; i++) {
  var currentFact = 'fact' + i;
  var currentElement = document.getElementById(currentFact);
  for(var j = 0; j < currentElement.children.length; j++) {
    currentElement.children[j].style.visibility = 'hidden';
  }
}
// console.log(document.getElementById('fact1').children.length);
// document.getElementById('fact1').firstChild.style.visibility = 'hidden';
// document.getElementById('fact1').lastChild.style.visibility = 'hidden';
// document.getElementById('fact1').firstChild.style.visibility = 'hidden';
// document.getElementById('fact1').lastChild.style.visibility = 'hidden';
// document.getElementById('fact1').firstChild.style.visibility = 'hidden';
// document.getElementById('fact1').lastChild.style.visibility = 'hidden';
// document.getElementById('fact1').firstChild.style.visibility = 'hidden';
// document.getElementById('fact1').lastChild.style.visibility = 'hidden';
// document.getElementById('fact1').firstChild.style.visibility = 'hidden';
// document.getElementById('fact1').lastChild.style.visibility = 'hidden';

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
  alert('Thanks for playing ' + userName + '!');
  // qustion 1
  document.getElementById('fact1').children[0].style.visibility = 'visible';
  msg = 'True or false: King Ranch Chicken Caserole is my favorite thing to eat.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'true') {
    alert('That\'s correct!');
    document.getElementById('fact1').children[1].style.visibility = 'visible';
    document.getElementById('fact1').style.backgroundColor = 'green';
  }
  else {
    alert('I thought you knew me better!');
    document.getElementById('fact1').children[1].style.visibility = 'visible';
    document.getElementById('fact1').style.backgroundColor = 'red';
  }

  // question 2
  document.getElementById('fact2').children[0].style.visibility = 'visible';
  msg = 'True or false: I was born in Aurora, CO.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'true') {
    alert('That\'s correct!');
    document.getElementById('fact2').children[1].style.visibility = 'visible';
    document.getElementById('fact2').style.backgroundColor = 'green';
  }
  else {
    alert('I thought you knew me better!');
    document.getElementById('fact2').children[1].style.visibility = 'visible';
    document.getElementById('fact2').style.backgroundColor = 'red';
  }

  // question 3
  document.getElementById('fact3').children[0].style.visibility = 'visible';
  msg = 'True or false: I have 5 siblings.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'false') {
    alert('That\'s correct!');
    document.getElementById('fact3').children[1].style.visibility = 'visible';
    document.getElementById('fact3').style.backgroundColor = 'green';
  }
  else {
    alert('I thought you knew me better!');
    document.getElementById('fact3').children[1].style.visibility = 'visible';
    document.getElementById('fact3').style.backgroundColor = 'red';
  }

  // question 4
  document.getElementById('fact4').children[0].style.visibility = 'visible';
  msg = 'True or false: My favorite color is blue.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'false') {
    alert('That\'s correct!');
    document.getElementById('fact4').children[1].style.visibility = 'visible';
    document.getElementById('fact4').style.backgroundColor = 'green';
  }
  else {
    alert('I thought you knew me better!');
    document.getElementById('fact4').children[1].style.visibility = 'visible';
    document.getElementById('fact4').style.backgroundColor = 'red';
  }

  // question 5
  document.getElementById('fact5').children[0].style.visibility = 'visible';
  msg = 'True or false: I grew up in Texas.';
  response = prompt(msg);
  response = response.toLowerCase();
  if (response === 'true') {
    alert('That\'s correct!');
    document.getElementById('fact5').children[1].style.visibility = 'visible';
    document.getElementById('fact5').style.backgroundColor = 'green';
  }
  else {
    alert('I thought you knew me better!');
    document.getElementById('fact5').children[1].style.visibility = 'visible';
    document.getElementById('fact5').style.backgroundColor = 'red';
  }
  alert('Thanks for playing ' + userName + '!');
}


