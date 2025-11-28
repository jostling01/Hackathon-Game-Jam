let cardPack = []
const suite = ['Spades','Daimonds','Clubs','Hearts']
const cardValue = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']

for (let i = 0; i < suite.length; i++) {
    for(let k = 0; k<cardValue.length; k++) {
        cardPack.push(`${cardValue[k]} of ${suite[i]}`)
    }
}
//Above section defines the deck of cards

function shuffle(array) {
    let i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//Then define the shuffle function - Ask tutors about this!
shuffle(cardPack)

//console.log(cardPack);

const player1Deck = cardPack.slice(0,26)
//console.log(player1Deck)

const player2Deck = cardPack.slice(26,)
//console.log(player2Deck)

//Trying to split into 2 decks

let player1WinPile = []
let player2WinPile = []

const playCards = () => {
    let player1Card = player1Deck.pop()
    let player2Card = player2Deck.pop()
    let player1Value = player1Card.substring(0, player1Card.indexOf(' '));
    let player2Value = player2Card.substring(0, player2Card.indexOf(' '));
    let p1Value = cardValue.indexOf(player1Value)
    let p2Value = cardValue.indexOf(player2Value)

}

/*
Jack of spades vs 2 of clubs
split at the first space
Jack vs 2
*/

playCards()