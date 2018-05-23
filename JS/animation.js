'user strict'

//// /ReDirect/////


/////DELAY GIMMICK SIMULATE LOADING SCREEN///
function delay() {
    document.getElementById('submit')
    var delay = setTimeout(reDirect, 300);

    

}
function reDirect() {
    window.location.href = 'main.html';
    saveUserName();
}

//------------------------------
//Save username to Local storage
//------------------------------
// var user = "code fellows";
var userName = document.getElementById('userName').value;
function saveUserName() {
    // event.preventDefault();
    // var userName=event.target.saveUserName.value;
    localStorage.setItem('localUserName', JSON.stringify(userName));
}

// inputForm.addEventListener('submit',saveUserName);





/////MAIN HTML/////
/////MODAL POPUP/////
var modal = document.getElementById('rules');

// Get the button that opens the modal
var btn = document.getElementById('popUp');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
btn.addEventListener('click', function () {
    modal.style.display = 'block';
})

// When the user clicks on <span> (x), close the modal

span.addEventListener('click', function () {
    modal.style.display = 'none';
})

/////SCOREBOARD PAGE/////
