// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');


inputRef.addEventListener('input', onInputChange);
btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

let amount = 0;

function onInputChange(event) {
  amount = event.currentTarget.value;
}

function createBoxes() {
  let width = 30;
  let height = 30;
  let newDiv = `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;

  for (let i = 1; i < amount; i+=1) {
    width += 10;
    height += 10;
    newDiv += `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;
    boxesRef.innerHTML = newDiv;
  }
    
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
