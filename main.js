//this will be the java for the main page

//most of the getting of elements

const examples = document.querySelectorAll('.Example');

//rest of the page java script

//the example project contsinares javascript eill be below

examples.forEach((example) => {
    example.addEventListener('click', () => {
        SwithchExampleContainerActive(example);
    });
});

function SwithchExampleContainerActive(example) {
    if (!example.classList.contains('ActiveExampleContainer')) {
        //example.classList.remove('ExampleContainer');
        example.classList.add('ActiveExampleContainer');
    } else {
        example.classList.remove('ActiveExampleContainer');
        //example.classList.add('ExampleContainer');
    }
}
