import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

import 'flatpickr/dist/flatpickr.min.css';

const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysInput = document.querySelector('span[data-days]');
const hoursiInput = document.querySelector('span[data-hours]');
const minutesInput = document.querySelector('span[data-minutes]');
const secondsInput = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', 'true');

let currentTime = new Date().getTime();
let selectedTime = 0;
let timeForTimer = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      selectedTime = selectedDates[0].getTime();
    }
  },
};

flatpickr(inputDate, options);

startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
  setInterval(() => {
    currentTime = new Date().getTime();
    timeForTimer = selectedTime - currentTime;
    if (timeForTimer < 0) {
      return;
    }
    renderTimer(convertMs(timeForTimer));
    // console.log(selectedTime);
    // console.log(currentTime);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function renderTimer({ days, hours, minutes, seconds }) {
  daysInput.textContent = addLeadingZero(days);
  hoursiInput.textContent = addLeadingZero(hours);
  minutesInput.textContent = addLeadingZero(minutes);
  secondsInput.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
