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


const increment = value => value += 1;
const decrement = value => value -= 1;
const refreshInterface = (interfaceEl, newValue) => interfaceEl.textContent = newValue;

actionsBtnEl.forEach(actionBtn  => actionBtn.addEventListener('click', onButtonClick));


function onButtonClick(e) {
    let counter = Number(counterValueEl.textContent);
    
    if (e.target.dataset.action === 'increment') {
       counter = increment(counter);
    }

    if (e.target.dataset.action === 'decrement') {
        counter = decrement(counter);
    }

    refreshInterface(counterValueEl, counter);
}




