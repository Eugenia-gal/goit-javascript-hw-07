/* Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid. */

const inputEl = document.querySelector('#validation-input');
const charCount = Number(inputEl.dataset.length);
console.log(charCount);

inputEl.addEventListener('change', onFinishInput);

function onFinishInput() {
    if (inputEl.value === '') {
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
        return;
    }

    if (inputEl.value.length === charCount) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}