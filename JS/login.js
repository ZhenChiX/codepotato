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
console.log(userNameArray.length);

function saveUserName(event) {
    var returnPlayer = false;
    event.preventDefault();
    var userName = document.getElementById('userName').value;
    if (localStorage.localUserName){
        // alert('Local storage exists');
        userNameArray = JSON.parse(localStorage.getItem('localUserName')); // TODO: Check if username already exists
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
    };

    localStorage.setItem('localUserName', JSON.stringify(userNameArray));
    window.location.href = 'main.html';
}

inputForm.addEventListener('submit', saveUserName);