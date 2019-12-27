

if(confirm('Do you want to play a game?')) {

    let totalPrize = 0;
    do {
        let exit = true;
        let stage = 1;
        totalPrize = 0;
        do {
            let maxNumm = 4 + 4 * stage;
            let randNumm = Math.floor(Math.random() * (maxNumm + 1));
            console.log(randNumm + ' ' + stage);
            // first attempt
            let userNumm = prompt('Chose a roulette pocket number from 0 to ' + maxNumm +
                '\nAttempts left: 3\nTotal prize: ' + totalPrize + 
                '$\nPossible prize on current attempt: ' + 100 * stage + '$');
            while (userNumm % 1 !== 0 || userNumm < 0 || userNumm > maxNumm || userNumm === '' || !userNumm) {
                alert('Wrong number');
                userNumm = prompt('Chose a roulette pocket number from 0 to ' + maxNumm +
                    '\nAttempts left: 3\nTotal prize: ' + totalPrize + 
                    '$\nPossible prize on current attempt: ' + 100 * stage + '$');
            }

            if(Number(userNumm) === randNumm) {
                totalPrize += 100 * stage;
                if(!confirm('Congratulation, you won! Your prize is: ' + 100 * stage + '$\nDo you want to continue?')) {
                    exit = false;
                }
            } else {
                // second attempt
                userNumm = prompt('Chose a roulette pocket number from 0 to ' + maxNumm +
                    '\nAttempts left: 2\nTotal prize: ' + totalPrize + 
                    '$\nPossible prize on current attempt: ' + 50 * stage + '$');
                while (userNumm % 1 !== 0 || userNumm < 0 || userNumm > maxNumm || userNumm === '' || !userNumm) {
                    alert('Wrong number');
                    userNumm = prompt('Chose a roulette pocket number from 0 to ' + maxNumm +
                        '\nAttempts left: 2\nTotal prize: ' + totalPrize + 
                        '$\nPossible prize on current attempt: ' + 50 * stage + '$');
                }

                if(Number(userNumm) === randNumm) {
                    totalPrize += 50 * stage;
                    if(!confirm('Congratulation, you won! Your prize is: ' + 50 * stage +
                        '$\nDo you want to continue?')) {
                        exit = false;
                    }
                } else {
                    // third attempt
                    userNumm = prompt('Chose a roulette pocket number from 0 to ' + maxNumm +
                        '\nAttempts left: 1\nTotal prize: ' + totalPrize + 
                        '$\nPossible prize on current attempt: ' + 25 * stage + '$');
                    while (userNumm % 1 !== 0 || userNumm < 0 || userNumm > maxNumm || userNumm === '' || !userNumm) {
                        alert('Wrong number');
                        userNumm = prompt('Chose a roulette pocket number from 0 to ' + maxNumm +
                            '\nAttempts left: 1\nTotal prize: ' + totalPrize + 
                            '$\nPossible prize on current attempt: ' + 25 * stage + '$');
                    }

                    if(Number(userNumm) === randNumm) {
                        totalPrize += 25 * stage;
                        if(!confirm('Congratulation, you won! Your prize is: ' + 25 * stage +
                            '$\nDo you want to continue?')) {
                            exit = false;
                        }
                    } else {
                        exit = false;
                    }
                }
            }
            stage++;           
        } while(exit);
    } while (confirm('Thank you for your participation.\nYour prize is: ' +
                    totalPrize + '$\nDo you want to play again?'));
} else {
    alert('You did not become a billionaire, but can.');
}