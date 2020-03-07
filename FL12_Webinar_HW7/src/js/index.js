import '../scss/style.scss';
import {robotHand} from './robot';

const homePage = document.getElementById('wrapper');

const [winsPlayerLog, winsRobotLog] = document.getElementsByClassName('wins');
const [text] = document.getElementsByClassName('text');
const [roundLog] = document.getElementsByClassName('round_log');
const [playBtn] = document.getElementsByClassName('btn_play');
const [btnGroup] = document.getElementsByClassName('btn_group');

const show = (...items) => {
    for(let btn of items) {
        if(btn.classList.contains('hide')) {
            btn.classList.remove('hide')
        }
    }
};
const hide = (...items) => {
    for(let btn of items) {
        if(!btn.classList.contains('hide')) {
            btn.classList.add('hide')
        }
    }
};

let playerWins;
let robotWins;
let round;

const showResult = (txt = '', gameResult = `Round: ${round}`) => {
    winsPlayerLog.innerText = `You: ${playerWins}`;
    winsRobotLog.innerText = `Robot: ${robotWins}`;
    text.innerText = txt;
    roundLog.innerText = gameResult;
}

btnGroup.addEventListener('click', (e) => {
    if(!e.target.classList.contains('btn')) {
        return
    }
    let playerItem = e.target.name;
    const robotItem = robotHand();

    let str = `You: ${playerItem}. Robot: ${robotItem}. `;

    if(playerItem === 'rock') {
        if(robotItem === 'covers') {
            playerWins++;
            str += 'Winner: You.';
        } else if(robotItem === 'paper') {
            robotWins++;
            str += 'Winner: Robot.';
        }
    } else if(playerItem === 'paper') {
        if(robotItem === 'rock') {
            playerWins++;
            str += 'Winner: You.';
        } else if(robotItem === 'covers') {
            robotWins++;
            str += 'Winner: Robot.';
        }
    } else if(playerItem === 'covers') {
        if(robotItem === 'paper') {
            playerWins++;
            str += 'Winner: You.';
        } else if(robotItem === 'rock') {
            robotWins++;
            str += 'Winner: Robot.';
        }
    }
    round++;

    if(round === 4) {
        show(playBtn);
        hide(btnGroup);
        let gameResult;
        if(playerWins > robotWins)
            gameResult = 'You are Winner';
        else if(playerWins < robotWins) {
            gameResult = 'You are Loser';
        } else {
            gameResult = 'It is draw';
        }
        showResult(str, gameResult);
    } else {
        showResult(str);
    }
});


playBtn.addEventListener('click', () => {
    playerWins = 0;
    robotWins = 0;
    round = 1;

    showResult();

    hide(playBtn);
    show(btnGroup);
});
