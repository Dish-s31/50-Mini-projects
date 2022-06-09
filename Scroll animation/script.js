// get element

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

// check bottom trigger point, add/remove classes

function checkBoxes() {
    const triggerBottom = (window.innerHeight) / (5) * 4;
    console.log(`trigger point is: ${triggerBottom}`)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;   /* get top of box */
        console.log(`top is: ${box.index}${boxTop}`)

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}