// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === ''){
    return nameOutputRef.textContent = 'Anonymous';
  } 
    nameOutputRef.textContent = event.currentTarget.value;
  
}









































// =====================================================================
// const input = document.getElementById('name-input');
// const output = document.getElementById('name-output');

// input.addEventListener('input', onImputChange);

// function onImputChange (event) {
//    if (event.currentTarget.value === '') {
//       output.textContent = 'Anonymous';
//     } else {
//     output.textContent = event.currentTarget.value;
//     }
// }


// =====================================================================

// const inputRef = document.querySelector("#name-input");
// const nameRef = document.querySelector("#name-output");

// inputRef.addEventListener("input", (event) => {
//   if (event.currentTarget.value.length === 0) {
//     nameRef.textContent = "Anonymous";
//     return;
//   }
//   nameRef.textContent = event.currentTarget.value;
// });