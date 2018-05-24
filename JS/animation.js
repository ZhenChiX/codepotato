'user strict'



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
