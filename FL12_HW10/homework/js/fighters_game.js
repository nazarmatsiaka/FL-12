const Fighter = function ({name, damage, hp, strength, agility}) {
    const maxHp = hp;
    let numWin = 0;
    let numLoss = 0;

    class Fighter {
        getName() {
            return name;
        }
        getDamage() {
            return damage;
        }
        getStrength() {
            return strength;
        }
        getAgility() {
            return agility;
        }
        getHealth() {
            return hp;
        }

        attack(defender) {
            const a = 100;
            const chanceDefense = (defender.getStrength() + defender.getAgility()) / a;
            const chanceAttack = Math.random();

            if(chanceAttack > chanceDefense) {
                defender.dealDamage(this.getDamage());
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        }

        logCombatHistory() {
            console.log(`Name: ${this.getName()}, Wins: ${numWin}, Loss: ${numLoss}`);
        }

        heal(healthSize) {
            const resultHp = this.getHealth() + healthSize;

            if(resultHp > maxHp) {
                hp = maxHp;
            } else {
                hp = resultHp;
            }
        }
        dealDamage(damageSize) {
            const resultHp = this.getHealth() - damageSize;

            if(resultHp > 0 ) {
                hp = resultHp;
            } else {
                hp = 0;
            }
        }

        addWin() {
            numWin++;
        }
        addLoss() {
            numLoss++;
        }
    }

    return new Fighter();
};

const battle = (firstFighter, secondFighter) => {
    if(firstFighter.getHealth() === 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight.`);
    } else if(secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getName()} is dead and can't fight.`);
    } else {
        let player = 'first';

        do {
            if(player === 'first') {
                firstFighter.attack(secondFighter);
                player = 'second';
            } else if( player === 'second') {
                secondFighter.attack(firstFighter);
                player = 'first';
            }
        } while (firstFighter.getHealth() !== 0 && secondFighter.getHealth() !== 0);

        if(firstFighter.getHealth() === 0) {
            console.log(`${secondFighter.getName()} has won!`);
            firstFighter.addLoss();
            secondFighter.addWin();
        } else if (secondFighter.getHealth() === 0) {
            console.log(`${firstFighter.getName()} has won!`);
            secondFighter.addLoss();
            firstFighter.addWin();
        }
    }
}
