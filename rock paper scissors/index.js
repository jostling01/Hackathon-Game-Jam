const prompt=require("prompt-sync")({sigint:true})

const rockPaperScissors = () => {
    let user = prompt("User option:","Pick which one")
    const options = ['rock','paper','scissors']
    user = user.toLowerCase()

    if(!options.includes(user)) {
        console.log(`${user} is not a valid choice, Pick either: Rock, Paper or Scissors! And then re-run`);
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

rockPaperScissors()

