class Players {
    constructor() {
        this.playersBill = {
            cross: document.querySelector('.bill__cross'),
            zero: document.querySelector('.bill__zero')
        };
        this.randPlayer();
    }

    nextPlayer() {
        this.activePlayer = this.activePlayer === 'zero'? 'cross': 'zero';

        this.highlightUser();
    }

    randPlayer() {
        this.activePlayer = Math.random() > 0.5? 'zero': 'cross';

        this.highlightUser();
    }

    highlightUser() {
        for(let user in this.playersBill) {
            if(this.playersBill[user].parentElement.classList.contains('highlight')) {
                this.playersBill[user].parentElement.classList.remove('highlight');
            }
        };

        this.playersBill[this.activePlayer].parentElement.classList.add('highlight');
    }

    editBill() {
        this.playersBill[this.activePlayer].innerText++;
    }

    clearBill() {
        for(let user in this.playersBill) {
            this.playersBill[user].innerText = 0;
        };
    }
}

export default Players;
