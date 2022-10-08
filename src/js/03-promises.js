const createBtn = document.querySelector('button');
// const amountInput = document.getElementsByName('amount');
// const delayInput = document.getElementsByName('delay');
// const stepInput = document.getElementsByName('step');
const form = document.querySelector('.form');

console.log(form.elements);

// const inputValues = {
//   delay,
//   position,
// };

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval();
    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
