//this will be the java for the main page

//most of the getting of elements

const examples = document.querySelectorAll('.Example');

//rest of the page java script

//the example project contsinares javascript eill be below

examples.forEach((example) => {
    example.addEventListener('click', () => {
        SwithchExampleContainerActive(example);

        chekBoxes();
    });
});

function SwithchExampleContainerActive(example) {
    if (!example.classList.contains('ActiveExampleContainer')) {
        example.classList.add('ActiveExampleContainer');
    } else {
        example.classList.remove('ActiveExampleContainer');
    }
}

//showing examples as we scrowl down

window.addEventListener('scroll', chekBoxes);

chekBoxes();

function chekBoxes() {
    const triggerPoint = (window.innerHeight / 5) * 4;

    examples.forEach((example) => {
        const exampleTop = example.getBoundingClientRect().top;

        if (exampleTop < triggerPoint) {
            example.classList.add('show');
        } else {
            example.classList.remove('show');
            example.classList.remove('ActiveExampleContainer');
        }
    });
}
