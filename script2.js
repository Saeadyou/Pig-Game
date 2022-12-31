'use strict';
const newGame = document.querySelector('.btn_newgame');
const roll = document.querySelector('.btn_roll');
const hold = document.querySelector('.btn_hold');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const img = document.getElementById('img');
const player1Score = document.getElementById('player1_score');
const player2Score = document.getElementById('player2_score');
const player1Current = document.getElementById('player1_current');
const player2Current = document.getElementById('player2_current');
const leftInactive = document.querySelector('.inactive1');
const rightInactive = document.querySelector('.inactive2');
let flag = true;

active();
// reset the game
const reset = function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  img.style.background = 'none';
  img.style.boxShadow = 'none';
  flag = true;
};

newGame.addEventListener('click', reset);
// rool dice
roll.addEventListener('click', function () {
  const rnd = Math.trunc(Math.random() * 6 + 1);
  img.style.background = `url(images/dice-${rnd}.png)`;
  let user;
  flag ? (user = 1) : (user = 2);
  // calculate current
  switch (rnd) {
    case 2:
      eval('player' + user + 'Current').textContent =
        Number(eval('player' + user + 'Current').textContent) + rnd;
      break;
    case 3:
      eval('player' + user + 'Current').textContent =
        Number(eval('player' + user + 'Current').textContent) + rnd;
      break;
    case 4:
      eval('player' + user + 'Current').textContent =
        Number(eval('player' + user + 'Current').textContent) + rnd;
      break;
    case 5:
      eval('player' + user + 'Current').textContent =
        Number(eval('player' + user + 'Current').textContent) + rnd;
      break;
    case 6:
      eval('player' + user + 'Current').textContent =
        Number(eval('player' + user + 'Current').textContent) + rnd;
      break;
    default:
      // if dice == 1
      flag = !flag;
      active();
      eval('player' + user + 'Current').textContent = 0;
      img.style.background = 'url(images/dice-1.png)';
      break;
  }
  // set box-shadow for dice and fit dice to div
  img.style.backgroundSize = 'contain';
  img.style.boxShadow = '4px 4px 20px 5px rgba(0, 0, 0, 0.4)';
});
// hold scores
hold.addEventListener('click', function () {
  let user;
  flag ? (user = 1) : (user = 2);
  eval('player' + user + 'Score').textContent =
    Number(eval('player' + user + 'Score').textContent) +
    Number(eval('player' + user + 'Current').textContent);
  if (Number(eval('player' + user + 'Score').textContent) >= 100) {
    alert(`player ${user} won`);
    reset();
  }
  eval('player' + user + 'Current').textContent = 0;
  flag = !flag;
  active();
});
// active ind deactive players
function active() {
  if (flag) {
    leftInactive.style.display = 'none';
    rightInactive.style.display = 'block';
  } else {
    rightInactive.style.display = 'none';
    leftInactive.style.display = 'block';
  }
}
