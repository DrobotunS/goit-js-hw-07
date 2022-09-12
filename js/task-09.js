const handBtnRandom = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// handBtnRandom.addEventListener('click', () => {
//   spanRef.textContent = `${getRandomHexColor()}`;
//   bodyRef.style.background = `${getRandomHexColor()}`;
// });
  
handBtnRandom.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  spanRef.textContent =  randomColor ;
  bodyRef.style.background =  randomColor ;
});