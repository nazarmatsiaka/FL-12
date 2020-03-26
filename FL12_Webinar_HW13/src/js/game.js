import Players from './players';

class Game extends Players{
    constructor() {
        super();
        this.cells = [null, null, null, null, null, null, null, null, null];
        this.resultBoard = document.getElementById('resultBoard');
    }

    move(actionCell) {
        if(!this.cells[actionCell.id]) {
            actionCell.classList.add(this.activePlayer);
            this.cells[actionCell.id] = this.activePlayer;

            if(this.chechWinner()) {
                this.resultBoard.classList.add('show');
                this.editBill();
            } else if(this.checkCellArr()) {
                this.resultBoard.classList.add('show');
            } else {
                this.nextPlayer();
            }
        }
    }

    chechWinner() {
        let combinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for(let comb of combinations) {
            let result = comb.every(i => this.cells[i] === this.activePlayer);
            if(result) {
                return result;
            }
        }
        return false;
    }

    checkCellArr() {
        return this.cells.every(i => i);
    }

    newGame(cellsHtml) {
        this.resultBoard.classList.remove('show');

        for(let cell of cellsHtml) {
            cell.classList.value = 'cell';
        }

        this.cells = [null, null, null, null, null, null, null, null, null];

        this.randPlayer();
    }

    clear(cellsHtml) {
        this.clearBill();
        this.newGame(cellsHtml);
    }
}

export default new Game();
