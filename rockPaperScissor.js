const player = document.getElementById('player')
const computer = document.getElementById('computer')
const result = document.getElementById('result')
const possibilities = document.querySelectorAll('button')
const playerChoice = document.getElementById('playerChoice')
const computerChoice2 = document.getElementById('computerChoice2')
const finalResult = document.getElementById('finalResult')
let computerChoice
let userchoice
let result2

possibilities.forEach(possibilities => possibilities.addEventListener('click', (event) => {
    userchoice = event.target.id
    playerChoice.innerHTML = userchoice
    generateComputerChoice();

}));

function generateComputerChoice() {
    const randomNo = Math.floor(Math.random() * 3 + 1);



    computerChoice = randomNo === 1 ? "Rock" : randomNo === 2 ? "Paper" : "Scissor";



    computerChoice2.innerHTML = computerChoice

    generateFinalResult();

}

function generateFinalResult() {
    result2 = userchoice === computerChoice ? " Tie Game " :
        userchoice === "Rock" && computerChoice === "Paper" ? "Computer Wins" :
        userchoice === "Paper" && computerChoice === "Scissor" ? "Computer Wins" :
        userchoice === "Scissor" && computerChoice === "Rock" ? "Computer Wins" :
        "Player WIns";

    finalResult.innerHTML = result2;
}