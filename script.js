const newGame = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");

let jogadorAtual = 0; 
let score = document.getElementById("score--0")
let current = document.getElementById("current--0")

function trocaJogador() {
    current.textContent = "0"

    if (jogadorAtual === 0) {
        jogadorAtual = 1;
        score = document.getElementById("score--1");
        current = document.getElementById("current--1")
    } else {
        jogadorAtual = 0;
        score = document.getElementById("score--0")
        current = document.getElementById("current--0")
    }
    
}

function ganhador() {
    let ponto = parseInt(score.textContent);
    if (ponto >= 10) {
        document.querySelector(`.player--${jogadorAtual}`).classList.add("player--winner")
        alert(`O player ${jogadorAtual} ganhou`)
    }
}

/* Reset */
newGame.addEventListener("click", () => {
    const scorePlayer1 = document.getElementById("score--0");
    const currentPlayer1 = document.getElementById("current--0");
    scorePlayer1.textContent = "0";
    currentPlayer1.textContent = "0";

    const scorePlayer2 = document.getElementById("score--1");
    const currentPlayer2 = document.getElementById("current--1");
    scorePlayer2.textContent = "0";
    currentPlayer2.textContent = "0";

    document.querySelector(`.player--1`).classList.remove("player--winner")
    document.querySelector(`.player--0`).classList.remove("player--winner")


    jogadorAtual = 0;
})

/* Dado */
roll.addEventListener("click", () => {
    const imageDado = document.getElementsByClassName("dice")

    let randomInt = Math.floor(Math.random() * 6) + 1;
    imageDado.src = `img/dice-${randomInt}.png`;

    if (randomInt === 1) {
        trocaJogador();
    } else {
        let currentScore = parseInt(current.textContent);
        currentScore += randomInt;
        current.textContent = currentScore.toString()
    }
})

/* Segura pontuação */
hold.addEventListener('click', () => {
    let currentScore = parseInt(current.textContent);
    let ponto = parseInt(score.textContent);

    ponto += currentScore
    score.textContent = ponto.toString()
    
    ganhador()
    trocaJogador()
})
