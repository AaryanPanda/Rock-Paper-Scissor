

//Adding Event Listener to the buttons

var userChoice = document.getElementById("user-choice")

document.addEventListener('click', (event) => {
    if (event.target.id == "rock") {
        let userImage = document.createElement('img')
        userImage.src = './assets/rock-hand.png'
        userChoice.innerHTML = ''
        userChoice.append(userImage)
        displayRandomImage()

        compareScore()
    }

    else if (event.target.id == "paper") {
        let userImage = document.createElement('img')
        userImage.src = './assets/paper-hand.png'
        userChoice.innerHTML = ''
        userChoice.append(userImage)
        displayRandomImage()

        compareScore()
    }

    else if (event.target.id == "scissor") {
        let userImage = document.createElement('img')
        userImage.src = './assets/scissors-hand.png'
        userChoice.innerHTML = ''
        userChoice.append(userImage)
        displayRandomImage()

        compareScore()
    }

})







//Create Random Nums 
function getRandomNum(max) {
    return Math.floor(Math.random() * (max + 1))
}






//Create Random Images

const ImageArray = ['http://127.0.0.1:5500/Rock-Paper-Scissor/assets/rock-hand.png',
    'http://127.0.0.1:5500/Rock-Paper-Scissor/assets/paper-hand.png',
    'http://127.0.0.1:5500/Rock-Paper-Scissor/assets/scissors-hand.png']

var randomImage = document.getElementById("random-image")

function displayRandomImage() {
    let randomImageSrc = getRandomNum(2)

    randomImage.innerHTML = `<img src="${ImageArray[randomImageSrc]}" alt="Random Image">`


}







//Compare Scores
let score1 = 0
let score2 = 0

function compareScore() {
    let pcScore = randomImage.firstElementChild.src
    let yourScore = userChoice.firstElementChild.src
    
    if (score1 == 5 || score2 == 5) {
        resetGame(); 
    }

    else if (yourScore == pcScore) {
        console.log("It's a Draw")
    }
   
    else if (
        (yourScore === ImageArray[0] && pcScore === ImageArray[2]) ||
        (yourScore === ImageArray[1] && pcScore === ImageArray[0]) ||
        (yourScore === ImageArray[2] && pcScore === ImageArray[1])
    ) {
        
        score1++
        updateScore(score1,score2)
        popup(win)
    }
    else {
        
        score2++
        updateScore(score1,score2)
        popup(lose)
    }
}








//Update Score
function updateScore(score1,score2) {
    let userScore = document.getElementById("user-score")
    let pcScore = document.getElementById("pc-score")
    userScore.innerHTML=score1
    pcScore.innerHTML=score2
}







//Update the popup for win/lose
var win = document.getElementById("you-win")
var lose = document.getElementById("you-lose")

function popup(result) {
    if (score1==5 || score2==5) {
        result.style.display = "block"
    }
        
}






// Function to reset the game
function resetGame() {
    if (score1 === 5 || score2 === 5) {

        window.location.reload();
    }
}






//Play Agin Buuton
var playAgain = document.getElementById("play-again")
playAgain.addEventListener('click', ()=> {
    window.location.reload()
})
