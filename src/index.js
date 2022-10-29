import getResponse from './modules/postData.js';
import getData from './modules/fetchData.js';
import { creatNewGame, GameId } from './modules/game.js';
import './styles.css';

const refreshBtn = document.getElementById('refreshBtn');
const creatNewGameVar = document.getElementById('click-here');
const Form = document.getElementById('Data-Form');

Form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userName = document.getElementById('username');
  const score = document.getElementById('score');

  if (score.value && userName.value) {
    const scoreInfo = {
      user: userName.value,
      score: score.value,
    };
    userName.value = '';
    score.value = '';
    getResponse(scoreInfo);
  }
});

refreshBtn.addEventListener('click', () => {
  getData();
  const targetIdField = document.getElementById('YourGameID');
  targetIdField.innerHTML = `${GameId}`;
});

getData();

creatNewGameVar.addEventListener('click', () => {
  creatNewGame();
});