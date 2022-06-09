const panels = document.querySelectorAll('.panel');


// remove active classes on click of panel

function removeActiveClasses() {

    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}


panels.forEach((panel) => {

    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})