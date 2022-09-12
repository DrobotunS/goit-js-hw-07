let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrement.addEventListener('click', () => {
    console.log(counterValue -= 1);
    valueRef.textContent = counterValue;
});
increment.addEventListener('click', () => {
    console.log(counterValue += 1);
    valueRef.textContent = counterValue;
});