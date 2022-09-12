const inputRef = document.querySelector('#validation-input');
const spanRef = document.querySelector('#validation-input');
inputRef.addEventListener("blur", event => {
    inputRef.classList.add('invalid');
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        return  inputRef.classList.replace('invalid', 'valid');
    } 
    inputRef.classList.remove('valid');
  });
