// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

const inputRef = document.querySelector('#validation-input');
const totalLengthRef = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
if (event.currentTarget.value.length ===
    totalLengthRef) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    return;
} 
    inputRef.classList.add("invalid");

}








































// =======================================================ruslan
// const input = document.getElementById('validation-input');
// const totalSymbol = document.querySelector('input[data-length = "6"]');
// const totalLength = Number(totalSymbol.dataset.length);

// console.log(totalLength);

// input.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//    let totalLengthInput = event.currentTarget.value.length;
//    console.log(totalLengthInput);

//    if (totalLength === totalLengthInput) {
//       input.classList.remove('invalid');
//       input.classList.add('valid');
//    } else {
//       input.classList.add('invalid')
//       input.classList.remove('valid');
//    }
// }

// =============================================================
// const inputRef = document.querySelector("#validation-input");

// inputRef.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   if (
//     event.currentTarget.value.length ===
//     Number(inputRef.getAttribute("data-length"))
//   ) {
//     inputRef.classList.add("valid");
//     inputRef.classList.remove("invalid");
//     return;
//   }
//   inputRef.classList.add("invalid");
// }