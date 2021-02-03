const p1display = document.querySelector("#p1score");
const p2display = document.querySelector("#p2score");


const btn1 = document.querySelector('#p1btn');
const btn2 = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#reset');
const gameMode = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;



btn1.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        p1display.textContent = p1score;
        if (p1score === winningScore) {
            isGameOver = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
        }
        p1display.textContent = p1score;
    }

});

btn2.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
        p2display.textContent = p2score;
        if (p2score === winningScore) {
            isGameOver = true;
            p1display.classList.add('loser');
            p2display.classList.add('winner');

        }
        p2display.textContent = p2score;
    }

});
gameMode.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

resetbtn.addEventListener('click', resetGame);

function resetGame() {
    isGameOver = false
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('loser', 'winner');
    p2display.classList.remove('winner', 'loser');

}