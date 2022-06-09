// Getting elements by selectors


const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;


// Next button , update circles on user click

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()

})

// Previous button, decrease circle on click 
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1;
    }

    update()
})


//  function to add/ remove classes, increse/decrease width of progress

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })

    const actives = document.querySelectorAll('.active');

    // setting width of progess bar, 33, 66, 99%

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // disable buttons on threshold 

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}