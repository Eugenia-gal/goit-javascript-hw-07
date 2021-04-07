/* Напиши скрипт который, при наборе текста в инпуте input#name-input
 (событие input), подставляет его текущее значение в span#name-output. 
 Если инпут пустой, в спане должна отображаться строка 'незнакомец'*/


const inputEl = document.querySelector('#name-input');
const greetingEl = document.querySelector('#name-output');
const defaultGreeting = 'незнакомец';

inputEl.addEventListener('input', onChangeInputText);

function onChangeInputText() {

    if (inputEl.value !== '') {
        greetingEl.textContent = inputEl.value;
    } else {
        greetingEl.textContent = defaultGreeting;
    }
        
}