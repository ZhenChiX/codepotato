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

function cardExistsInList (cardName, handArray){
    var temp = false;
      for (var i in handArray){
        if (cardName === handArray[i].name)
        temp = true;  
      };
      return temp;
  }; // end function cardExistsInList
  
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
  // renderHand();
  
  //------------------------------
  // event listeners
  //------------------------------
  // nameInput.addEventListener('submit', HandlerFunction);
  
  
  
  
  
  //redirect login//
  
  // function redirect(){
  //     var login = document.getElementById('reDirect');
  //     login.addEventListener('submit');
  
  // }
  
  //change//