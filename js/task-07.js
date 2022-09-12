const textRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');
inputRef.addEventListener("input", event => {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
  });
  