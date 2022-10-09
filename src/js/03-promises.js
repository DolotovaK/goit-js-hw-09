import Notiflix from 'notiflix';
// const createBtn = document.querySelector('button');
// const amountInput = document.querySelector('input[name=amount]');
// const delayInput = document.querySelector('input[name=delay]');
// const stepInput = document.querySelector('input[name=step]');
const form = document.querySelector('.form');

// form.addEventListener('submit', onCreatePromise);

// console.log(form.elements);

let inputValues = {
  delay: 0,
  step: 0,
  amount: 0,
  position: 0,
};

form.addEventListener(
  'input',
  evt => (inputValues[evt.target.name] = +evt.target.value)
);

form.addEventListener('submit', onCreatePromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    const promiseObj = {
      position,
      delay,
    };
    if (shouldResolve) {
      resolve(promiseObj);
    } else {
      reject(promiseObj);
    }
  });
  promise
    .then(({ position, delay }) => {
      setTimeout(
        () =>
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          ),
        delay
      );
    })
    .catch(({ position, delay }) => {
      setTimeout(
        () =>
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          ),
        delay
      );
    });
}

function onCreatePromise(evt) {
  evt.preventDefault();
  let delayResult = inputValues.delay;

  for (let i = 0; i < inputValues.amount; i += 1) {
    createPromise(inputValues.position, delayResult);
    inputValues.position += 1;
    delayResult += inputValues.step;
    console.log(delayResult);
  }
}

//  console.log(delayResult);
//  console.log(inputValues.delay);

// function createPromise(position, delay) {
//   // delay = delayInput[0].value;
//   // position = amountInput[0].value;
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     let promiseObj = { position, delay };
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(promiseObj);
//       } else {
//         reject(promiseObj);
//       }
//     }, delay);
//   });
//   // .then(({ position, delay }) => {
//   //   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   // })
//   // .catch(({ position, delay }) => {
//   //   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   // });
// }

// function onCreatePromise(evt) {
//   evt.preventDefault();
//   let delayValue = Number(delayInput.value);
//   let stepValue = Number(stepInput.value);
//   let amountValue = Number(amountInput.value);

//   for (let i = 1; 1 <= amountValue; i += 1) {
//     let position = i;
//     createPromise(position, delayValue)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//     delayValue += stepValue;
//   }
// }
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
