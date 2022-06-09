// Get Elements

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');


// Add/ remove class on click

open.addEventListener('click', () => {
    container.classList.add('show-nav')
})


close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})


// sticky - this not working currently , Under build

window.onscroll = function () { buttonSticky() };

var btn = document.getElementsByClassName('.circle-container');

var sticky = btn.offsetTop;

function buttonSticky() {
    if (window.pageYOffset > sticky) {
        btn.classList.add("sticky");
    } else {
        btn.classList.remove("sticky");
    }
}