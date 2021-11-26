//this will be the java for the main page

//most of the getting of elements

const examples = document.querySelectorAll('.Example');
const examplePageBodys = document.querySelectorAll('.ExamplePageBody');
const navToggel = document.querySelector('#navIcon');
const navigationBar = document.querySelector('#navigationBar');

const uniCompleteStats = document.querySelector('#uniComplete');

//pages settup

navToggel.addEventListener('click', function ()
{
    navigationBar.classList.toggle('activeNav');
});

examples.forEach((example, index) =>
{
    example.addEventListener('click', () =>
    {
        SwithchExampleContainerActive(example, index);
    });
});

examplePageBodys.forEach((examplePageBody) =>
{
    examplePageBody.classList.add('hidden');

});

//rest of the page java script

//the example project contsinares javascript eill be below

function SwithchExampleContainerActive(example, index)
{
    if (!example.classList.contains('ActiveExampleContainer'))
    {
        example.classList.add('ActiveExampleContainer');
    } else
    {
        example.classList.remove('ActiveExampleContainer');
        setTimeout(function ()
        {
            chekBoxes();
        }, 510);
    }
    examplePageBodySizeChange(index);
}

//showing examples as we scrowl down

window.addEventListener('scroll', chekBoxes);

chekBoxes();

function chekBoxes()
{
    let triggerPoint = (window.innerHeight / 5) * 4;

    examples.forEach((example) =>
    {
        let exampleTop = example.getBoundingClientRect().top;
        let exampleBottom = example.getBoundingClientRect().bottom;

        if (exampleTop < triggerPoint)
        {
            example.classList.add('show');
        }
        else
        {
            example.classList.remove('show');
            if (example.classList.contains('ActiveExampleContainer'))
            {
                example.classList.remove('ActiveExampleContainer');
            }
        }

    });
}

// expanding/shrinking the ExamplePageBody

function examplePageBodySizeChange(index)
{
    if (examplePageBodys.item(index).classList.contains('hidden'))
    {
        examplePageBodys.item(index).classList.remove('hidden');
        examplePageBodys.item(index).classList.add('showExamplePageBody');
    } else
    {
        examplePageBodys.item(index).classList.add('hidden');
        examplePageBodys.item(index).classList.remove('showExamplePageBody');
    }
}

//create statbars 
function CreateStat(subject, mark)
{
    //create
    const skill = document.createElement('div');
    skill.classList.add('skill');

    const skillName = document.createElement('label');
    skillName.classList.add('skillText');
    skillName.innerText = subject;

    const barBack = document.createElement('div');
    barBack.classList.add('barBack');

    const statbar = document.createElement('div');
    statbar.classList.add(`statbar`);
    if (mark >= 75)
    {
        statbar.classList.add(`${ colorbar(mark) }`);
    }
    statbar.innerText = mark;
    statbar.style.width = `${ mark }%`;


    //append
    barBack.appendChild(statbar);

    skill.appendChild(skillName);
    skill.appendChild(barBack);

    //return

    return skill;
}

function colorbar(mark)
{
    if (mark >= 75)
    {
        return 'distinction';
    }

}

//pages construction must be at the bottom of the java file

uniCompleteStats.appendChild(CreateStat('cmpg322 mathimatical stastic', 90));
uniCompleteStats.appendChild(CreateStat('cmpg321 operatingsyatems', 60));