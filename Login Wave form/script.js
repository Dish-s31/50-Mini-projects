const labels = document.querySelectorAll('.form-control label');


// split label, map every character with span tag and join it

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span
        style = "transition-delay:${idx * 70}ms"
        >${letter}</span>`)
        .join('')
})
