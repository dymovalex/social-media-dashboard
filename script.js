const switcher = document.querySelector('input[type=checkbox]');

const body = document.querySelector('body');

switcher.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});