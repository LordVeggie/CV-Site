//this will be the java for the main page

//most of the getting of elements

const examples = document.querySelectorAll('.Example');
const examplePageBodys = document.querySelectorAll('.ExamplePageBody');
const navToggel = document.querySelector('#navIcon');
const navigationBar = document.querySelector('#navigationBar');

const containers = document.querySelectorAll('.container');

const uniCompleteStats = document.querySelector('#uniComplete');

const disciplinesText = document.querySelector('#disciplinesText');
const disciplinesBar = document.querySelector('#disciplinesBar');

const codingText = document.querySelector('#codingText');
const codingBar = document.querySelector('#codingBar');

const softwareText = document.querySelector('#softwareText');
const softwareBar = document.querySelector('#softwareBar');

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

function chekBoxes()
{
    let triggerPoint = (window.innerHeight / 5) * 4;

    //the cv tabs

    containers.forEach((container) =>
    {
        let containerTop = container.getBoundingClientRect().top;

        if (containerTop < triggerPoint)
        {
            container.classList.add('show');
        }
        else
        {
            container.classList.remove('show');
            if (container.classList.contains('ActiveContainer'))
            {
                container.classList.remove('ActiveContainer');
            }
        }

    });

    //example pages

    examples.forEach((example) =>
    {
        let exampleTop = example.getBoundingClientRect().top;

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


function createSkill(text, level, textContainer, barContainer)
{
    //create

    const skillName = document.createElement('label');
    skillName.classList.add('skillText');
    skillName.classList.add(`skillsTextSpaceBottom`);
    skillName.innerText = text;


    const barBack = document.createElement('div');
    barBack.classList.add('barBack');
    barBack.classList.add(`skillsBarSpaceBottom`);

    const statbar = document.createElement('div');
    statbar.classList.add(`statbar`);

    statbar.classList.add(`${ colorSkillBar(level) }`);


    statbar.style.width = `${ level }%`;

    //append
    barBack.appendChild(statbar);

    textContainer.appendChild(skillName);
    barContainer.appendChild(barBack);

}

function colorSkillBar(level)
{
    if (level > 80)
    {
        return 'Expert';
    }
    if (level > 60)
    {
        return 'Advanced';
    }
    if (level > 40)
    {
        return 'Intermadiate';
    }
    if (level > 20)
    {
        return 'Elementray';
    }
    else
    {
        return 'Beginner';
    }

}

//pages construction must be at the bottom of the java file

chekBoxes();

uniCompleteStats.appendChild(CreateStat('ACCS 111 FINANCIAL ACCOUNTANCY', 77));
uniCompleteStats.appendChild(CreateStat('ACCS 121 FINANCIAL ACCOUNTING', 62));
uniCompleteStats.appendChild(CreateStat('ALDE 122 ACADEMIC LITERACY DEVELOPMENT - ENG', 80));
uniCompleteStats.appendChild(CreateStat('BMAN 111 INTRODUCTION TO BUSINESS MANAGEMENT', 70));
uniCompleteStats.appendChild(CreateStat('BMAN 223 PROBLEM SOLVING FOR MANAGERS', 62));
uniCompleteStats.appendChild(CreateStat('CMPG 111 INTRODUCTION TO COMPUTING AND PROGRAMMING', 87));
uniCompleteStats.appendChild(CreateStat('CMPG 121 STRUCTURED PROGRAMMING', 96));
uniCompleteStats.appendChild(CreateStat('CMPG 122 USER INTERFACE PROGRAMMING I', 75));
uniCompleteStats.appendChild(CreateStat('CMPG 211 OBJECT ORIENTED PROGRAMMING', 94));
uniCompleteStats.appendChild(CreateStat('CMPG 212 APPS AND ADVANCED USER INTERFACE PROGRAMMING', 82));
uniCompleteStats.appendChild(CreateStat('CMPG 213 SYSTEM ANALYSIS AND DESIGN 1', 75));
uniCompleteStats.appendChild(CreateStat('CMPG 214 COMMUNICATION SKILLS', 87));
uniCompleteStats.appendChild(CreateStat('CMPG 215 INFORMATION SECURITY', 71));
uniCompleteStats.appendChild(CreateStat('CMPG 221 DATA STRUCTRES AND ALGORITHMS', 89));
uniCompleteStats.appendChild(CreateStat('CMPG 222 DATA ANALYTICS II', 88));
uniCompleteStats.appendChild(CreateStat('CMPG 223 SYSTEM ANALYSIS AND DESIGN II', 59));
uniCompleteStats.appendChild(CreateStat('CMPG 311 DATABASES', 73));
uniCompleteStats.appendChild(CreateStat('CMPG 312 DECISION SUPPORT SYSTEMS 1', 58));
uniCompleteStats.appendChild(CreateStat('CMPG 313 ARTIFICIAL INTELLIGENCE', 67));
uniCompleteStats.appendChild(CreateStat('CMPG 315 COMPUTER NETWORKS', 73));
uniCompleteStats.appendChild(CreateStat('MTHS 113 BASIC MATHEMATICAL TECHNIQUES', 56));
uniCompleteStats.appendChild(CreateStat('MTHS 225 DISCRETE MATHEMATICS', 75));
uniCompleteStats.appendChild(CreateStat('STTN 111 DESCRIPTIVE STATISTICS', 83));
uniCompleteStats.appendChild(CreateStat('STTN 121 INTRO STAT INFERENCE I', 75));
uniCompleteStats.appendChild(CreateStat('WVNS 211 UNDERSTANDING THE NATURAL WORLD', 86));
uniCompleteStats.appendChild(CreateStat('WVNS 221 UNDERSTANDING THE NATURAL WORLD', 87));

//disciplines

createSkill('Coding', 100, disciplinesText, disciplinesBar);
createSkill('Design', 80, disciplinesText, disciplinesBar);
createSkill('Illistratoin', 80, disciplinesText, disciplinesBar);
createSkill('Animation', 60, disciplinesText, disciplinesBar);

//coding

createSkill('c++', 100, codingText, codingBar);
createSkill('c', 100, codingText, codingBar);
createSkill('c#', 80, codingText, codingBar);
createSkill('Node.js', 40, codingText, codingBar);
createSkill('JavaScript', 80, codingText, codingBar);
createSkill('Python', 60, codingText, codingBar);
createSkill('Java', 100, codingText, codingBar);
createSkill('CSS', 60, codingText, codingBar);
createSkill('HTML', 80, codingText, codingBar);
createSkill('GDscript', 80, codingText, codingBar);
createSkill('SQL', 40, codingText, codingBar);

//software

createSkill('Blender', 100, softwareText, softwareBar);
createSkill('Godot', 80, softwareText, softwareBar);
createSkill('Git', 60, softwareText, softwareBar);
createSkill('CorelDraw', 100, softwareText, softwareBar);
createSkill('Excel', 100, softwareText, softwareBar);
createSkill('Unity', 40, softwareText, softwareBar);
createSkill('Krita', 60, softwareText, softwareBar);
createSkill('Gimp', 80, softwareText, softwareBar);