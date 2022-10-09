import Notiflix from 'notiflix';
const createBtn = document.querySelector('button');
const amountInput = document.querySelector('input[name=amount]');
const delayInput = document.querySelector('input[name=delay]');
const stepInput = document.querySelector('input[name=step]');
const form = document.querySelector('.form');

form.addEventListener('submit', onCreatePromise);

console.log(form.elements);

// const inputValues = {
//   delay,
//   position,
// };

function createPromise(position, delay) {
  // delay = delayInput[0].value;
  // position = amountInput[0].value;

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    let promiseObj = { position, delay };
    setTimeout(() => {
      if (shouldResolve) {
        resolve(promiseObj);
      } else {
        reject(promiseObj);
      }
    }, delay);
  });
  // .then(({ position, delay }) => {
  //   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(({ position, delay }) => {
  //   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  // });
}

function onCreatePromise(evt) {
  evt.preventDefault();
  let delayValue = Number(delayInput.value);
  let stepValue = Number(stepInput.value);
  let amountValue = Number(amountInput.value);

  for (let i = 1; 1 <= amountValue; i += 1) {
    let position = i;
    createPromise(position, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayValue += stepValue;
  }
}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
