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
var nameList = []; // list of all our famous tech names. 

//------------------------------
// constructor functions
//------------------------------




//------------------------------
// helper functions
//------------------------------
function randomCard(deckArray) {
  // This function can be used for any non-zero stack of cards in deckArray
  return Math.floor(Math.random() * deckArray.length);
} // end function randomCard

function cardExistsInList(cardName, handArray) {
  var temp = false;
  // for each card in handArray
  // if cardName === handArray[i]
  // temp = true
  // end loop
  // return temp
}; // end funciton cardExistsInList

function madeSets(handArray, setsArray) { // takes in an array of the cards we are checking for 4 of a kind

  for (var i in nameList) {
    var match = 0;
    for (var j in handArray) {
      if (handArray[j].name === nameList[i]) {
        match++;
      }
    } // end loop for all cards in handArray
    if (match === 4) {
      tempSets.push(nameList[i]);
      for (var j in handArray) {
        if (handArray[j].name === nameList[i]) {
          renderSetMade(turnNow, handArray[j]); // show or alert user that this card is part of a set! 
          setsArray.push(handArray.split(i, 1)); // put this object into setsArray, take it out of handArray
        }
      }
    } // end of dealing with us having a set of 4 cards. 
  } // end loop for all famous tech names
} // end function madeSets

//------------------------------
// render functions
//------------------------------
function renderSetMade(user, cardObject) {
  // madeSets is managing the data. We want to alert the user they made a set! 
} // end function renderSetMade

function renderHand() {
  // this function is called whenever the cards held by either User or Demi might change
  // it should display the correct number of card backs for demi, and the correct card objects for user
  // probably it should also adjust the draw pile. 
} // end function renderHand
//------------------------------
// main functions
//------------------------------
function validateCardAsk(testCard, player) { // takes cardAsk
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
  if (anotherTurn) {
    return 'user';
  } else {
    return 'demi'; // go Fish, then demi's turn
  }
}; // end funciton validateCardAsk

funciton demiTurn(){
  var testCard = randomCard(demiHand); // card we will ask for. 
  turnNow = validateCardAsk(testCard, 'demi');
} // end function demiTurn

function startHand() { // 
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
  if (!realCard) {
    // that card does not exit, try your turn again. 
  } else if (!hasCard) {
    // Hey cheater, you can't ask for a card on in your hand!, try again
  } else {
    turnNow = validateCardAsk(testCard, 'user');
    madeSets(userHand, userSets);
    renderHand();
    if (turnNow === 'demi') {
      // goFish for player's hand
      while (turnNow = 'demi') {
        demiTurn();
        madeSets(demiHand, demiSets);
        renderHand();
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