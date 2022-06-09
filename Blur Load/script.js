// get elememnts

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
let text = document.querySelector('.text');


// pecentage 

let load = 0;


let int = setInterval(blurring, 30);


// increase % count

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`

    loadText.style.opacity = scale(load, 0, 100, 1, 0)      //opacity changes

    bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`


    // *** Under Work ----- text style not blurring

    // text.innerText.style.opacity = scale(load, 0, 100, 1, 0)
    // text.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`
}

// stack - map range of numbers to another range

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}