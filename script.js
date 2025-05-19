console.log("This is Tic-Tac-Toe");
let GameOverSound = new Audio("folder/gameover.mp3");
let MoveSound = new Audio("folder/Move.mp3")
let turn = "X";
let isgameover = false;


// Function to change the Turn 
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check for a Win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('game-box-span');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0], 
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e => {
        if( (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.game-display').innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "20vw";
        }
    })
};


// Game Logic
let boxes = document.getElementsByClassName("game-box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.game-box-span');
    element.addEventListener('click', () => {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            MoveSound.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("game-display")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


// Reset Button
resetButton.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.game-box-span');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " "
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("game-display")[0].innerText = "Turn for " + turn; 
})
