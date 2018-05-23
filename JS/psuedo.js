'user strict';

//------------------------------
// global variables
//------------------------------
var drawPile = []; // cards not in play yet
var demiHand = []; // cards for demi that are not yet sets of 4
var userHand = [];  // cards for player that are not yet sets of 4
var demiSets = []; // sets of 4 in demi's hand
var userSets = []; // sets of 4 in player's hand
var fullDeck = [];
var startHandSize = 5;
var cardAsk = '';
var turnNow = ''; // will either be 'user' or 'demi'


//------------------------------
// constructor functions
//------------------------------




//------------------------------
// helper functions
//------------------------------

function cardExistsInList (cardName, handArray){
  var temp = false;
  // for each card in handArray
  // if cardName === handArray[i]
  // temp = true
  // end loop
  // return temp
}; // end funciton cardExistsInList


//------------------------------
// main functions
//------------------------------
function validateCardAsk(testCard, player){ // takes cardAsk
  // testCard is the card the player is guessing, we have already checked if exists as a card and if user is allowed to ask for it
  // player is who's turn it is. it is a string either equal to 'user' or to 'demi'
  var anotherTurn = false;
  var playerHand = [];
  var opponentHand = [];
  // if player = 'user', then oppenentHand is demiHand, & playerHand is userHand
  // if player = 'demi', then the opposite than above. 

  // for each card in opponent hand
    // if testCard === opponent hand
      // remove from opponent and
      // put in other hand
      // anotherTurn = true
    // end loop
    if(anotherTurn) {
      return 'user'; 
    } else {
      return 'demi'; // go Fish, then demi's turn
    }
}; // end funciton validateCardAsk

function startHand(){ // 
  // copy every card in fullDeck and put them in draw pile
  // loop for startHandSize (ex 5) times
    // randomly choose a card from draw pile and put in demi's deck
    // remove card from drawPile
    // randomly choose a card from draw pile and put in player's deck
    // remove card from drawPile
  // close for loop
}; // end function startHand


//------------------------------
// event handlers
//------------------------------
function handlerFunction(e) {
  var testCard = cleanInput(e); 
  var realCard = cardExistsInList(testCard, fullDeck); // returns true if in fullDeck
  var hasCard = cardExistsInList(testCard, playerHand); // returns true if in asker's hand
  if(!realCard) {
    // that card does not exit, try your turn again. 
  } else if(!hasCard) {
    // Hey cheater, you can't ask for a card on in your hand!, try again
  } else {
    turnNow = validateCardAsk(testCard, 'user');
    renderHand();
    if(turnNow === 'demi') {
      // goFish for player's hand
      while(turnNow = 'demi') {
        // take demi's turn
      }
    } // end of demi's turn
  }

} // end function HandlerFunction


//------------------------------
// on load
//------------------------------
startHand();
renderHand();

//------------------------------
// event listeners
//------------------------------
nameInput.addEventListener('submit', HandlerFunction);





//redirect login//

// function redirect(){
//     var login = document.getElementById('reDirect');
//     login.addEventListener('submit');

// }

//change//