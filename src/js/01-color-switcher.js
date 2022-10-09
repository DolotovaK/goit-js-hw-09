const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', startChangeBackground);
stopBtn.addEventListener('click', stopChangeBackground);

let intervalId = 0;

function startChangeBackground() {
  intervalId = setInterval(() => {
    bodyEl.style.background = getRandomHexColor();
    startBtn.setAttribute('disabled', 'true');
  }, 1000);
}

function stopChangeBackground() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
