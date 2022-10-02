// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector('.change-color');
const changeSpanRef = document.querySelector('.color');

btnChangeColorRef.addEventListener('click', onClickChangeColorBody);

function onClickChangeColorBody() {
  changeSpanRef.textContent = getRandomHexColor();
  document.body.style.backgroundColor = `${changeSpanRef.textContent}`;
  
}


