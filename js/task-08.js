/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input 
и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), 
которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount 
и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть 
шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/

const inputEl = document.querySelector('input');
const controlsBtnListEl = document.querySelectorAll('button');
const containerEl = document.querySelector('#boxes');
let counter = 0;

inputEl.addEventListener('input', e => counter = e.currentTarget.value)
controlsBtnListEl.forEach(btn => btn.addEventListener('click', onButtonClick));

function onButtonClick(e) {
    if (e.currentTarget.dataset.action === 'render') {
        const boxesMarkUp = createBoxes(counter);
        containerEl.insertAdjacentHTML('beforeend', boxesMarkUp);
    }

    if (e.currentTarget.dataset.action === 'destroy') {
        containerEl.innerHTML = "";
    }
}

function createBoxes(amount) {
    const boxesMarkUpArray = [];
    for (let i = 0; i < amount; i += 1) {
        boxesMarkUpArray.push(`<div style="width: ${(30+i*10)}px; height: ${(30+i*10)}px; background-color: rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})"></div>`)
    }
    return boxesMarkUpArray.join('');
}

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}
