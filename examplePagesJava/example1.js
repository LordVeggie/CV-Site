const page = document.querySelector('#example1');
const labels = document.querySelectorAll('.textBoxContainer label');

labels.forEach(label =>
    {
        label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`).join('');
    })
