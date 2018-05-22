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


//------------------------------
// constructor functions
//------------------------------




//------------------------------
// helper functions
//------------------------------
function validateCardAsk(testCard, playerHand){ // takes cardAsk
    var realCard = cardExistsInList(testCard, fullDeck); // returns true if in fullDeck
    var hasCard = cardExistsInList(testCard, playerHand); // returns true if in asker's hand
    var anotherTurn = false;
    // if realCard === false 
        // return 'notCard'
    // if hasCard === false
        // return 'cheater'
    // for each card in opponent hand
        // if testCard === opponent hand
            // remove from opponent and
            // put in other hand
            // anotherTurn = true
    // end loop
    // if anotherTurn = true
        // return 'anotherTurn'
    // else return 'goFish'
};

function cardExistsInList (cardName, handArray){
    var temp = false;
    // for each card in handArray
        // if cardName === handArray[i]
            // temp = true
    // end loop
    // return temp
};


//------------------------------
// main functions
//------------------------------
function startHand(){ // 
    // copy every card and put them in draw pile
    // loop for startHandSize (ex 5) times
        // randomly choose a card from draw pile and put in demi's deck
        // remove card from drawPile
        // randomly choose a card from draw pile and put in player's deck
        // remove card from drawPile
    // close for loop
};


//------------------------------
// event handlers
//------------------------------


//------------------------------
// on load
//------------------------------
startHand();
displayHand();

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