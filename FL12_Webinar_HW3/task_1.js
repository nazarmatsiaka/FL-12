const _cards = Symbol('cards');

class Deck {
    constructor() {
        this.shuffle();
    }
    
    get count() {
        return this[_cards].length;
    }

    shuffle() {
        this[_cards] = [];

        for(let i = 1; i <= 13; i++) {
            this[_cards].push(new Card('hearts', i));
            this[_cards].push(new Card('diamonds', i));
            this[_cards].push(new Card('clubs', i));
            this[_cards].push(new Card('spades', i));
        }
        
        this[_cards].sort(function() {
            return Math.random() - 0.5;
        });
    }

    draw(n) {
        return this[_cards].splice(-n);
    }
    
}

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    get isFaceCard() {
        return this.rank === 1 || this.rank > 10;
    }

    toString() {
        let str = '';
        switch(this.rank) {
            case 1: str += 'Ace'; break;
            case 11: str += 'Jack'; break;
            case 12: str += 'Queen'; break;
            case 13: str += 'King'; break;
            default: str += this.rank;
        }
        return str + ' of ' + this.suit;
    }

    compare(cardOne, cardTwo) {
        if(cardOne.rank === cardTwo.rank) {
            return 'draw';
        } else if(cardOne.rank > cardTwo.rank) {
            return 'one';
        } else {
            return 'two';
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.deck = new Deck();
        this.wins = 0;
    }

    play(playerOne, playerTwo) {
        do {
            let plaerOneCard = playerOne.deck.draw(1)[0];
            let plaerTwoCard = playerTwo.deck.draw(1)[0];

            switch(plaerOneCard.compare(plaerOneCard, plaerTwoCard)) {
                case 'one': playerOne.wins++; break;
                case 'two': playerTwo.wins++; break;
            }

        } while(playerOne.deck.count > 0);

        if(playerOne.wins > playerTwo.wins) {
            console.log(`${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`);
        } else if(playerOne.wins < playerTwo.wins) {
            console.log(`${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`);
        } else {
            console.log(`Draw ${playerOne.wins} to ${playerTwo.wins}`);
        }
    }
}

// let player1 = new Player('Tom');
// let player2 = new Player('Alex');

// player1.play(player1, player2);