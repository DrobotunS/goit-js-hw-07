const textRef = document.querySelector('#name-output');
const inputRef = document.querySelector('#name-input');
inputRef.addEventListener("keyup", event => {
    if (event.currentTarget.value.length === 0) {
        return  textRef.textContent = 'Anonymous'
    }
    textRef.textContent = event.currentTarget.value;
  });
  