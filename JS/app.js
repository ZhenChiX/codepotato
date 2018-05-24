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

var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
var wins = 0;
var names = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
// var playerHand=[];
// var opponentHand=[];
//------------------------------
// constructor functions
//------------------------------

var CardObject = function (name, suits, filePath) {
  this.name = name;
  this.suit = suits;
  this.filePath = 'IMG/' + this.name + this.suit + '.png';
  // fullDeck.push(this);
}; // end constructor CardObject

for (var i in suits) {
  for (var j in names) {

    fullDeck.push(new CardObject(names[j], suits[i]));
  };

};
//------------------------------
// make card objects

//------------------------------
// helper functions
//------------------------------
function randomCard(deckArray) {
  // This function can be used for any non-zero stack of cards in deckArray
  return Math.floor(Math.random() * deckArray.length);
} // end function randomCard

function cleanInput(userInput) {

  userInput.toLowerCase
}; // end function cleanInput

function cardExistsInList(cardName, handArray) {
  var temp = false;
  for (var i in handArray) {
    if (cardName === handArray[i].name)
      temp = true;
  };
  return temp;
}; // end function cardExistsInList

function arrayList(arr) { // this function helps in testing array contents
  var arrayList = '';
  for (var i in arr) { arrayList += arr[i].name + ', ' };
  return arrayList;
} // end helper function arrayList, which returns a string of text of the name of cards. 

function madeSets(user, handArray, setsArray) { // takes in an array of the cards we are checking for 4 of a kind
  console.log(user + ' is testing in madeSets with a hand of ' + arrayList(handArray));
  var nameList = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
  for (var i in nameList) {
    var match = 0;
    for (var j in handArray) {
      if (handArray[j].name === nameList[i]) {
        match++;
        console.log('match for ' + nameList[i] + ' is: ' + match);
      }
    } // end loop for all cards in handArray
    if (match === 4) { // currently still at a specific i of nameList
      console.log('A set was made! ' + user + ' has four ' + nameList[i] + 's!');
      renderSetMade(user, handArray[j]); // show or alert user that this card is part of a set! 
      // tempSets.push(nameList[i]);
      for (var j = handArray.length - 1; j > -1; j--) {
        if (handArray[j].name === nameList[i]) {
          console.log('Moving ' + handArray[j].name + ' ' + handArray[j].suit + ' to sets array');
          setsArray.push(handArray.splice(j, 1)[0]); // put this object into setsArray, take it out of handArray
        } //
      } // end looping through handArray
    } // end of dealing with us having a set of 4 cards. 
  } // end loop for all famous tech names
  // renderHand() is called after madeSets, so we don't need to do that now. 
} // end function madeSets

//------------------------------
// render functions
//------------------------------
function renderSetMade(user, cardObject) {
  // madeSets is managing the data. We want to alert the user they made a set! 
  // end function renderSetMade
}
function renderHand() {
  // this function is called whenever the cards held by either User or Demi might change
  // it should display the correct number of card backs for demi, and the correct card objects for user
  // probably it should also adjust the draw pile. 
  // end function renderHand

  //Render DEMI HAND
  var demiUl = document.getElementById('render-demi');
  demiUl.innerHTML = '';
  for (var i in demiHand) {
    // console.table(demiHand);
    var demiLi = document.createElement('li');
    // demiLi.textContent = demiHand[i].name;

    demiLi.innerHTML = "<img src=IMG/yellow_back.png>";
    demiUl.append(demiLi);
  }
  //Render PLAYER HAND
  var playerUl = document.getElementById('render-player');
  playerUl.innerHTML = '';
  for (var i in userHand) {
    // console.table(userHand);
    var playerLi = document.createElement('li');
    // playerLi.textContent = userHand[i].name;
    playerLi.innerHTML = "<img src=" + userHand[i].filePath + ">"
    playerUl.append(playerLi);

    // <img src=\'path/img1.jpg\'>
  }
  //demi sets 
  var demiSetsUl = document.getElementById('render-demi-sets');
  demiSetsUl.innerHTML = '';


  for (i = 0; i < demiSets.length; i = i + 4) {
    var demiSetsLi = document.createElement('li');
    demiSetsLi.innerHTML = "<img src=IMG/pile3.png>";
    demiSetsUl.append(demiSetsLi);

  }
  //player sets
  var playerSetsUl = document.getElementById('render-player-sets');
  playerSetsUl.innerHTML = '';


  for (i = 0; i < userSets.length; i = i + 4) {
    var playerSetsLi = document.createElement('li');
    playerSetsLi.innerHTML = "<img src=IMG/pile3.png>";
    playerSetsUl.append(playerSetsLi);

  }
}

//------------------------------
// main functions
//------------------------------
function validateCardAsk(testCard, playerHand, opponentHand) { // takes cardAsk
  // testCard is the card the player is guessing, we have already checked if exists as a card and if user is allowed to ask for it
  // playerHand is the hand of current player
  // opponentHand is the hand of the other player
  var anotherTurn = false;
  // console.log('anotherTurn: ' + anotherTurn);
  for (var i = opponentHand.length - 1; i > -1; i--) {
    if (testCard === opponentHand[i].name) {
      playerHand.push(opponentHand[i]); //why we are only getting one card
      opponentHand.splice(i, 1);
      anotherTurn = true;
      // console.log('go again!');
    } // end if testCard matches current card


  } // end loop through opponent's hand

  if (anotherTurn === false) {
    drawCard(playerHand);
    // renderGoFish();
    if (turnNow === 'demi') {
      turnNow = 'user';
    } else { // turnNow === 'user'
      turnNow = 'demi';
      console.log('next turn by: ' + turnNow);
    }
  } // end who's turn is next
}; // end function validateCardAsk

function drawCard(playerHand) {
  var draw = randomCard(drawPile); // randomly select card from drawPile
  playerHand.push(drawPile[draw]);
  drawPile.splice(draw, 1);
  // playerHand.push(drawPile.splice(draw, 1)); // whoever's hand was passed to us, add to that player's hand and remove from drawPile
}; // end function drawCard

function demiTurn() {

  var testIndex = randomCard(demiHand); // card we will ask for
  emptyDemiHand(drawPile, userHand);
  userHandEmpty(drawPile, demiHand)
  //user hand function
  console.log('demi guess: ' + demiHand[testIndex].name);

  validateCardAsk(demiHand[testIndex].name, demiHand, userHand);//where issues are


} // end function demiTurn





function startHand() { // 
  drawPile = fullDeck.slice();
  for (var i = 0; i < 5; i++) {
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
  var testCard = event.target.cardGuess.value;//gets user input
  testCard.toLowerCase();
  console.log('test card: ' + testCard);
  // var testCard = cleanInput(e);

  var realCard = cardExistsInList(testCard, fullDeck); // returns true if in fullDeck
  var hasCard = cardExistsInList(testCard, userHand); // returns true if in asker's hand
  if (!realCard) {
    alert('That card does not exit, try your turn again.');
  } else if (!hasCard) {
    alert('Hey cheater, you can\'t ask for a card already in your hand, try again.');
  }
  else {
    validateCardAsk(testCard, userHand, demiHand);

    madeSets('user', userHand, userSets);

    userHandEmpty(drawPile, demiHand);
    emptyDemiHand(drawPile, userHand);


    renderHand();
    if (turnNow === 'demi') {
      while (turnNow === 'demi') {
        demiTurn();
        madeSets('demi', demiHand, demiSets);
        renderHand();
      }
    } // end of demi's turn
  };//ends if real loop
  if (drawPile.length === 0 && userHand.length === 0 && demiHand.length === 0) { //ends game
    alert('game over');
    wins++;
    //needs results from matches count to determine winner


  };//ends endgame loop
  event.target.cardGuess.value = null; // empties the form field after the data has been grabbed
}; // end function HandlerFunction

//------------------------------
// on load
//------------------------------
startHand();
renderHand();

//------------------------------
// event listeners
//------------------------------
inputForm.addEventListener('submit', handlerFunction);

// function endGame(drawPile, userHand, opponentHand){

//   if (drawPile.length ===0 && userHand.length ===0 && demiHand.length===0){
//       alert('game over');
//   };

// };
function emptyDemiHand(drawPile, userHand) {
  if (drawPile.length > 0 && userHand.length === 0) {//check if opposing player has empty hand if game still in play opposing player will draw
    for (var i = 0; i < drawPile.length; i++) {
      console.log('added one to userHand')
      drawCard(userHand);
    };
  };
};//end the function


function userHandEmpty(drawPile, demiHand) {
  if (drawPile.length > 0 && demiHand.length === 0) {//check if opposing player has empty hand if game still in play opposing player will draw
    console.log('drawPile.length > 0 && userHand ===0 is true')
    for (var i = 0; i < drawPile.length; i++) {
      drawCard(demiHand);
    }
  };//end for loop
};
