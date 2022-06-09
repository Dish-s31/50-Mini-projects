// get elements

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')


// add/remove classes on mouse hoveron left
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));


//  add/remove classes on mouse hoveron left

right.addEventListener('mouseleave', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));