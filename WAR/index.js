const prompt=require("prompt-sync")({sigint:true})

let cardPack = []
const suite = ['Spades','Diamonds','Clubs','Hearts']
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
let drawPile = []

const playCards = () => {
    let player1Card = player1Deck.pop()
    let player2Card = player2Deck.pop()
    let player1Value = player1Card.substring(0, player1Card.indexOf(' '));
    let player2Value = player2Card.substring(0, player2Card.indexOf(' '));
    let p1Value = cardValue.indexOf(player1Value)
    let p2Value = cardValue.indexOf(player2Value)
    if (p1Value > p2Value) {
        player1WinPile.push([player1Card, player2Card]);
        console.log(`${player1Card} beats ${player2Card}, player 1 wins!`);
        if (drawPile.length > 0) {
            for (let i = 0; i < drawPile.length; i++) {
                player1WinPile.push(drawPile.pop())
            }
        }
    } else if (p1Value < p2Value) {
        player2WinPile.push([player1Card, player2Card]);
        console.log(`${player1Card} beaten by ${player2Card}, player 2 wins!`);
        if (drawPile.length > 0) {
            for (let i = 0; i < drawPile.length; i++) {
                player2WinPile.push(drawPile.pop())
            }
        }
    } else {
        drawPile.push([player1Card, player2Card]);
        console.log(`Player 1 card is ${player1Card}, player 2 card is ${player2Card}. It's a draw, play again!`);
    }
}



const playGame = () => {
    let rounds = prompt('How many rounds of WAR would you like to play?')
    rounds = parseInt(rounds)
    if (typeof rounds !== 'number') {
        console.log('Not a number, enter the number of rounds you want to play!')
    } else if (rounds > 26 || rounds < 1) {
        console.log('Maximum rounds is 26, minimum is 1!');
    } else {
        player1WinPile = []
        player2WinPile = []
        drawPile = []
        for (let i = 1; i <= rounds; i++) {
            playCards()
        }
        if (player1WinPile.length > player2WinPile.length) {
            console.log('Player 1 wins the game by ' + (player1WinPile.length - player2WinPile.length) + ' rounds!');
        } else if (player1WinPile.length < player2WinPile.length) {
            console.log('Player 2 wins the game by ' + (player2WinPile.length - player1WinPile.length) + ' rounds!');
        } else {
            console.log('The game was a tie!')
        }
    }
}
/*
Jack of spades vs 2 of clubs
split at the first space
Jack vs 2
*/

playGame(5);