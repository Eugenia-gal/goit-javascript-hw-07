/* Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement(). */


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

function makeIngridientsMarkupList(ingredient) {
    const ingredientEl = document.createElement('li');
    ingredientEl.classList.add('item');
    ingredientEl.textContent = ingredient;
    return ingredientEl;
}

const ingridientsMarkup = ingredients.map(makeIngridientsMarkupList);
ingredientsListEl.append(...ingridientsMarkup);
