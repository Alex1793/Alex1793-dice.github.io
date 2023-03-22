'use strict';

const btnCheck = document.querySelector('.check'),
      inputNumber = document.querySelector('.number-input'),
      message = document.querySelector('.guess-message'),
      scoreArea = document.querySelector('.score'),
      correctNumber = document.querySelector('.question'),
      again = document.querySelector('.again'),
      bestResultCounter = document.querySelector('.highscore');

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;
scoreArea.textContent = score;

let bestResult = 0;

function losePoint (text) {
    message.textContent = text;

    if(score == 0) {
        score = 1;
    }

    score--;
    scoreArea.textContent = score;
}

function game () {
    if(inputNumber.value.length === 0) {
        message.textContent = 'Введите число!';
    }

    if(+inputNumber.value === randomNumber) {
        message.textContent = 'Победа!';
        correctNumber.textContent = randomNumber;
        document.body.style.backgroundColor = 'green';
        btnCheck.removeEventListener('click', game);
        
        if(bestResult < score) {
            bestResult = score;
            bestResultCounter.textContent = bestResult;
        } else {
            return bestResult;
        }

    } else if (+inputNumber.value < randomNumber && inputNumber.value.length !== 0) {
        losePoint('Слишком мало!');
    } else if (+inputNumber.value > randomNumber && inputNumber.value.length !== 0) {
        losePoint('Слишком много!');
    }

    if(score === 0) {
        document.body.style.backgroundColor = 'red';
        message.textContent = 'Начните заново!';
        btnCheck.removeEventListener('click', game);
    }
}

btnCheck.addEventListener('click', game);

again.addEventListener('click', () => {
    message.textContent = 'Начни угадывать';
    correctNumber.textContent = '???';
    document.body.style.backgroundColor = 'black';
    inputNumber.value = '';
    score = 20;
    scoreArea.textContent = score;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    btnCheck.addEventListener('click', game);
})

inputNumber.addEventListener('input', () => {
    if(+inputNumber.value < 1) {
        inputNumber.value = '';
    } else if (+inputNumber.value > 20) {
        inputNumber.value = '';
    }
})

