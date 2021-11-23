//this will be the java for the main page

//most of the getting of elements

const examples = document.querySelectorAll('.Example');
const examplePageBodys = document.querySelectorAll('.ExamplePageBody');

//pages settup

examples.forEach((example, index) => {
    example.addEventListener('click', () => {
        SwithchExampleContainerActive(example, index);
        console.log(index);
    });
});

examplePageBodys.forEach((examplePageBody) => {
    examplePageBody.classList.add('hidden');
});

//rest of the page java script

//the example project contsinares javascript eill be below

function SwithchExampleContainerActive(example, index) {
    if (!example.classList.contains('ActiveExampleContainer')) {
        example.classList.add('ActiveExampleContainer');
    } else {
        example.classList.remove('ActiveExampleContainer');
    }
    examplePageBodySizeChange(index);
    console.log(index);
}

//showing examples as we scrowl down

window.addEventListener('scroll', chekBoxes);

chekBoxes();

function chekBoxes() {
    let triggerPoint = (window.innerHeight / 5) * 4;

    examples.forEach((example) => {
        let exampleTop = example.getBoundingClientRect().top;

        if (exampleTop < triggerPoint) {
            example.classList.add('show');
        } else {
            example.classList.remove('show');
            example.classList.remove('ActiveExampleContainer');
        }
    });
}

// expanding/shrinking the ExamplePageBody

function examplePageBodySizeChange(index) {
    if (examplePageBodys.item(index).classList.contains('hidden')) {
        examplePageBodys.item(index).classList.remove('hidden');
        examplePageBodys.item(index).classList.add('showExamplePageBody');
    } else {
        examplePageBodys.item(index).classList.add('hidden');
        examplePageBodys.item(index).classList.remove('showExamplePageBody');
    }
}
