// * Remember to run "go live" below to see your changes on save.

// COULDN'T GET MY RESET BUTTON TO WORK

// * write all your code INSIDE the function below
function init() {
    // Declare player one (human)
    const player = {
        currentChoice: null
    };
    // Declare player two (computer)
    const computer = {
        currentChoice: null
    };
    // Declare tools
    const choices = ['rock', 'paper', 'scissors']

    // Create function for computer choice randomiser
    function computerChooses() {
        let randomIndex = Math.floor(Math.random() * choices.length)
        computer.currentChoice = choices[randomIndex]
    }

    //Create a function that will enable the choices to be compared
    function compareChoices() {
        player.currentChoice = event.currentTarget.innerText
        computerChooses()

    // Create a funtion that will reset choices
    function resetChoices() {
        player.currentChoice = null
        computer.currentChoice = null
    }

        //Game rules if there is a tie
        if (computer.currentChoice === player.currentChoice) {
            document.getElementById("results").innerText =
                `It's a tie! You chose ${player.currentChoice} and Player 2 chose ${computer.currentChoice}`
            // Game rules if computer chooses rock & person chooses paper
        } else if (computer.currentChoice === choices[0]) {
            if (player.currentChoice === choices[1]) {
                document.getElementById("results").innerText =
                    `You win! You chose ${player.currentChoice} and Player 2 chose ${computer.currentChoice}`
                //Losing rules
            } else {
                document.getElementById("results").innerText =
                    `You lose! You chose ${player.currentChoice} and Player 2 chose ${computer.currentChoice}`
            }
            // Game rules if computer chooses paper & person chooses scissors
        } else if (computer.currentChoice === choices[1]) {
            if (player.currentChoice === choices[2]) {
                document.getElementById("results").innerText =
                    `You win! You chose ${player.currentChoice} and Player 2 chose ${computer.currentChoice}`
            } else {
                //Losing rules
                document.getElementById("results").innerText =
                    `You lose! You chose ${player.currentChoice} and Player 2 chose ${computer.currentChoice}`
            }
            // Game rules if computer chooses scissors & person chooses rock
        } else if (computer.currentChoice === choices[2]) {
            if (player.currentChoice === choices[0]) {
                document.getElementById("results").innerText =
                    `You win! You chose ${player.currentChoice} and Player 2 chose ${computer.currentChoice}`
            } else {
                //Losing rules
                document.getElementById("results").innerText =
                    `You lose! You chose ${player.currentChoice} and Player 2 chose ${computer.currentChoice}`
            }
        }

        // }
    }
    // Events
    //Make the HTML buttons work by creating events when a button is clicked
    document.getElementById('rock').addEventListener("click", compareChoices)
    document.getElementById('paper').addEventListener("click", compareChoices)
    document.getElementById('scissors').addEventListener("click", compareChoices)
    document.getElementById('reset').addEventListener("click", resetChoices)

}

// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)