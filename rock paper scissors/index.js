const rockPaperScissors = (user) => {
    const options = ['rock','paper','scissors']
    user = user.toLowerCase()

    if(!options.includes(user)) {
        console.log(`${user} is not a valid choice, Pick either: Rock, Paper or Scissors!`);
    } else {
        console.log(`User picks: ${user}`);
        let compChoiceIndex = Math.floor(Math.random()*3)
        const compChoice = options[compChoiceIndex]
        console.log(`Computer picks: ${compChoice}`);
        if((user==='rock' && compChoice === 'scissors') || (user==='scissors' && compChoice === 'paper') || (user==='paper' && compChoice === 'rock')){
            console.log('User wins!')
        } else if (user === compChoice){
            console.log('Tie, play again to determine a victor!')
        } else {
            console.log('Computer wins!');
        }

    }
}
rockPaperScissors('Banana')
rockPaperScissors('rock')

/*
const diceGame = () => {
    const userRoll = Math.floor(Math.random() * 6) + 1
    const computerRoll = Math.floor(Math.random() * 6) + 1
    console.log("The computer rolled a " + userRoll);
    console.log("The computer rolled a " + computerRoll);
    if (userRoll > computerRoll) {
        return "Well done, you win!"
    } else if (userRoll < computerRoll) {
        return "Better luck next time!"
    } else {
        return "Tie!"
    }
}

console.log(diceGame)

*/