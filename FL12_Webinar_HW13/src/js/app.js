import '../styles/style';

import game from './game';

let cells = document.getElementsByClassName('cell');
let newGameBtn = document.querySelector('.resetBtn');
let clearBtn = document.querySelector('.bill__clearBtn');

for(let cell of cells) {
    cell.addEventListener('click', function () {
        game.move(this);
    });
}

newGameBtn.addEventListener('click', () => {
    game.newGame(cells);
});

clearBtn.addEventListener('click', () => {
    game.clear(cells);
})
