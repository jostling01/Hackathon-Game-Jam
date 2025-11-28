
const diceGame = () => {
    const userRoll = Math.floor(Math.random() * 6) + 1
    const computerRoll = Math.floor(Math.random() * 6) + 1
    console.log("The user rolled a " + userRoll);
    console.log("The computer rolled a " + computerRoll);
    if (userRoll > computerRoll) {
        console.log("Well done, you win!")
    } else if (userRoll < computerRoll) {
        console.log("Better luck next time!")
    } else {
        console.log("Tie!")
    }
}

diceGame()

