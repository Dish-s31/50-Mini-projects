// Get elements

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// toggle class on click

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})