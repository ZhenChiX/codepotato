'use strict';

//// /ReDirect/////
/////DELAY GIMMICK SIMULATE LOADING SCREEN///
function delay() {
  // document.getElementById('submit')
  var delay = setTimeout(reDirect, 3000);
}

function reDirect() {
  window.location.href = 'main.html';
  // saveUserName();
}

//------------------------------
// Save username to local store
var inputForm = document.getElementById('loginForm');
var userNameArray = [];
var userWinsArray = [];
var userLossesArray = [];

function saveUserName(event) {
  var returnPlayer = false;
  event.preventDefault();
  var userName = document.getElementById('userName').value;
  if (localStorage.localUserName){
    // alert('Local storage exists');
    userNameArray = JSON.parse(localStorage.getItem('localUserName')); // Check if username already exists
    userWinsArray = JSON.parse(localStorage.getItem('localWins'));
    userLossesArray = JSON.parse(localStorage.getItem('localLosses'));
    for (var i in userNameArray){
      if (userName === userNameArray[i]){
        alert('Welcome back!');
        returnPlayer = true;
      }
    };
  } else {
    // alert('if username array is empty');
  };     
  if (returnPlayer === false){
    alert('Good luck!');
    userNameArray.push(userName);
    userWinsArray.push(0);
    userLossesArray.push(0);
  };
    
  localStorage.setItem('localUserName', JSON.stringify(userNameArray));
  localStorage.setItem('localWins', JSON.stringify(userWinsArray));
  localStorage.setItem('localLosses', JSON.stringify(userLossesArray));
  localStorage.setItem('currentUser', JSON.stringify(userName));
  window.location.href = 'main.html';
}

inputForm.addEventListener('submit', saveUserName);