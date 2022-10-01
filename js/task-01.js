
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const listOfCategoriesRef = document.querySelector('#categories');

const itemsByCategoryRef = listOfCategoriesRef.querySelectorAll('.item');

console.log("Number of categories:", itemsByCategoryRef.length);

itemsByCategoryRef.forEach(function (item) {
    const categoryTitle = item.querySelector('h2');
    console.log("Category:", categoryTitle.textContent);
    
    const elementCategory = item.querySelectorAll('li');  
    console.log("Elements:", elementCategory.length);
})




