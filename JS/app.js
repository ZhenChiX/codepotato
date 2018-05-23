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
var turnNow = 'user'; // will either be 'user' or 'demi'
var nameList = []; // list of all our famous tech names.
var inputForm = document.getElementById('game-form');

//------------------------------
// constructor functions
//------------------------------
var CardObject = function(name, suit, filePath){
    this.name = name;
    this.suit = suit;
    this.filePath = filePath;
    fullDeck.push(this);
}; // end constructor CardObject

//------------------------------
// make card objects
//------------------------------
new CardObject('a', 'spades', '../IMG/AS.png');
new CardObject('a', 'hearts', '../IMG/AH.png');
new CardObject('a', 'diamonds', '../IMG/AD.png');
new CardObject('a', 'clubs', '../IMG/AC.png');
new CardObject('2', 'spades', '../IMG/2S.png');
new CardObject('2', 'hearts', '../IMG/2H.png');
new CardObject('2', 'diamonds', '../IMG/2D.png');
new CardObject('2', 'clubs', '../IMG/2C.png');
new CardObject('3', 'spades', '../IMG/3S.png');
new CardObject('3', 'hearts', '../IMG/3H.png');
new CardObject('3', 'diamonds', '../IMG/3D.png');
new CardObject('3', 'clubs', '../IMG/3C.png');
new CardObject('4', 'spades', '../IMG/4S.png');
new CardObject('4', 'hearts', '../IMG/4H.png');
new CardObject('4', 'diamonds', '../IMG/4D.png');
new CardObject('4', 'clubs', '../IMG/4C.png');
new CardObject('5', 'spades', '../IMG/5S.png');
new CardObject('5', 'hearts', '../IMG/5H.png');
new CardObject('5', 'diamonds', '../IMG/5D.png');
new CardObject('5', 'clubs', '../IMG/5C.png');
new CardObject('6', 'spades', '../IMG/6S.png');
new CardObject('6', 'hearts', '../IMG/6H.png');
new CardObject('6', 'diamonds', '../IMG/6D.png');
new CardObject('6', 'clubs', '../IMG/6C.png');
new CardObject('7', 'spades', '../IMG/7S.png');
new CardObject('7', 'hearts', '../IMG/7H.png');
new CardObject('7', 'diamonds', '../IMG/7D.png');
new CardObject('7', 'clubs', '../IMG/7C.png');
new CardObject('8', 'spades', '../IMG/8S.png');
new CardObject('8', 'hearts', '../IMG/8H.png');
new CardObject('8', 'diamonds', '../IMG/8D.png');
new CardObject('8', 'clubs', '../IMG/8C.png');
new CardObject('9', 'spades', '../IMG/9S.png');
new CardObject('9', 'hearts', '../IMG/9H.png');
new CardObject('9', 'diamonds', '../IMG/9D.png');
new CardObject('9', 'clubs', '../IMG/9C.png');
new CardObject('10', 'spades', '../IMG/10S.png');
new CardObject('10', 'hearts', '../IMG/10H.png');
new CardObject('10', 'diamonds', '../IMG/10D.png');
new CardObject('10', 'clubs', '../IMG/10C.png');
new CardObject('j', 'spades', '../IMG/JS.png');
new CardObject('j', 'hearts', '../IMG/JH.png');
new CardObject('j', 'diamonds', '../IMG/JD.png');
new CardObject('j', 'clubs', '../IMG/JC.png');
new CardObject('q', 'spades', '../IMG/QS.png');
new CardObject('q', 'hearts', '../IMG/QH.png');
new CardObject('q', 'diamonds', '../IMG/QD.png');
new CardObject('q', 'clubs', '../IMG/QC.png');
new CardObject('k', 'spades', '../IMG/KS.png');
new CardObject('k', 'hearts', '../IMG/KH.png');
new CardObject('k', 'diamonds', '../IMG/KD.png');
new CardObject('k', 'clubs', '../IMG/KC.png');

//------------------------------
// helper functions
//------------------------------
function randomCard(deckArray) {
  // This function can be used for any non-zero stack of cards in deckArray
  return Math.floor(Math.random() * deckArray.length);
 } // end function randomCard

function cleanInput(userInput){
  userInput. toLowerCase
}; // end function cleanInput

function cardExistsInList (cardName, handArray){
    var temp = false;
      for (var i in handArray){
        if (cardName === handArray[i].name)
        temp = true;  
      };
      return temp;
  }; // end function cardExistsInList

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
function validateCardAsk(testCard, playerHand, opponentHand){ // takes cardAsk
  // testCard is the card the player is guessing, we have already checked if exists as a card and if user is allowed to ask for it
  // playerHand is the hand of current player
  // opponentHand is the hand of the other player
  var anotherTurn = false;
  console.log('anotherTurn: ' + anotherTurn);
  for (i in opponentHand){
    if (testCard === opponentHand[i].name){
      playerHand.push(opponentHand[i]);
      opponentHand.splice(i, 1);
      anotherTurn = true;
      console.log('go again!');
    } // end if testCard matches current card
  } // end loop through opponent's hand

  if(anotherTurn === false) {
    drawCard(playerHand);
    // renderGoFish();
    if (turnNow === 'demi'){
      turnNow = 'user';
    } else { // turnNow === 'user'
      turnNow = 'demi';
      console.log('turnNow: ' + turnNow);
    }
  } // end who's turn is next
}; // end function validateCardAsk

function drawCard(playerHand){
  var draw = randomCard(drawPile); // randomly select card from drawPile
  playerHand.push(drawPile[draw]);
  drawPile.splice(draw, 1);
  // playerHand.push(drawPile.splice(draw, 1)); // whoever's hand was passed to us, add to that player's hand and remove from drawPile
}; // end function drawCard

function demiTurn(){
  var testIndex = randomCard(demiHand); // card we will ask for
  console.log('test index: ' + testIndex);
  console.log('demi guess: ' + demiHand[testIndex].name);
  validateCardAsk(demiHand[testIndex], demiHand, userHand);
} // end function demiTurn

function startHand(){ // 
  drawPile = fullDeck.slice();
    for (var i = 0; i < 5; i++){
      var draw = randomCard(drawPile);
      demiHand.push(drawPile[draw]);
      drawPile.splice(draw, 1);
      draw = randomCard(drawPile);
      userHand.push(drawPile[draw]);
      drawPile.splice(draw, 1);
    };
}; // end function startHand


//------------------------------
// event handlers
//------------------------------
function handlerFunction(event) {
  event.preventDefault();
  var testCard = event.target.cardGuess.value;
  testCard.toLowerCase();
  console.log('test card: ' + testCard);
  // var testCard = cleanInput(e);
  var realCard = cardExistsInList(testCard, fullDeck); // returns true if in fullDeck
  var hasCard = cardExistsInList(testCard, userHand); // returns true if in asker's hand
  if (!realCard) {
     alert('That card does not exit, try your turn again.');
  } else if (!hasCard) {
    alert('Hey cheater, you can\'t ask for a card already in your hand, try again.');
  } else {
    validateCardAsk(testCard, userHand, demiHand);
    // madeSets(userHand, userSets);
    // renderHand();
    if (turnNow === 'demi') {
      // goFish for player's hand
      while (turnNow === 'demi') {
        demiTurn();
        // madeSets(demiHand, demiSets);
        // renderHand();
      }
    } // end of demi's turn
  }

} // end function HandlerFunction

//------------------------------
// on load
//------------------------------
startHand();
// renderHand();

//------------------------------
// event listeners
//------------------------------
inputForm.addEventListener('submit', handlerFunction);


//redirect login//

// function redirect(){
//     var login = document.getElementById('reDirect');
//     login.addEventListener('submit');

// }

//change//