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


