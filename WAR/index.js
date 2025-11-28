let cardPack = []
const suite = ['Spades','Daimonds','Clubs','Hearts']
const faceCards = ['Jack','Queen','King','Ace']
for (let i = 0; i < suite.length; i++) {
    for(let j = 2; j<=10; j++) {
        cardPack.push(`${j} of ${suite[i]}`)
    }
    for(let k = 0; k<faceCards.length; k++) {
        cardPack.push(`${faceCards[k]} of ${suite[i]}`)
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

console.log(cardPack);

const player1Deck = cardPack.slice(0,26)
console.log(player1Deck)

const player2Deck = cardPack.slice(26,)
console.log(player2Deck)

//Trying to split into 2 decks