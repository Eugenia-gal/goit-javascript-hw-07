/* Счетчик состоит из спана и кнопок, 
которые должны увеличивать и уменьшать 
значение счетчика на 1.

Создай переменную counterValue 
в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement 
для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, 
вызовы функций и обновление интерфейса */

const actionsBtnEl = document.querySelectorAll("#counter button");
const counterValueEl = document.querySelector('#value');

let counter = Number(counterValueEl.textContent);

actionsBtnEl.forEach(actionBtn  => addEventListener('click', onButtonClick));


function onButtonClick(e) {

    if (e.target.dataset.action === 'increment') {
       counter = increment(counter);
    }
    
    if (e.target.dataset.action === 'decrement') {
        counter = decrement(counter);
        counterValueEl.textContent = counter;
    }

    counterValueEl.textContent = counter;
}


function increment(value) {
    return value += 1;

}
function decrement(value) {
    return value -= 1;
}




