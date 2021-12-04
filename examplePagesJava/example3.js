const page3 = document.querySelector('#example3');

const themeToggel = document.querySelector('.themeToggel');

const hourMarks = document.querySelectorAll('.hourMark')

const handH = document.querySelector('.hour');
const handM = document.querySelector('.minute');
const handS = document.querySelector('.second');

const clockTime = document.querySelector('.clockTime');
const clockDate = document.querySelector('.clockDate');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

hourMarks.forEach((mark, i) =>
{
    mark.style.transform = `translate(10rem, -1rem) rotate(${ 30 * i }deg)`;
});




themeToggel.addEventListener('click', () =>
{

    if (!page3.classList.contains('lightMode'))
    {
        //darkmode 
        themeToggel.textContent = 'Dark Mode';
        page3.classList.add('lightMode');
    }
    else
    {

        //light mode 
        themeToggel.textContent = 'Light Mode';
        page3.classList.remove('lightMode');
    }

});

function setTime()
{
    const time = new Date();

    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();

    let hours = (time.getHours() % 12);
    let minutes = (time.getMinutes());
    let seconds = (time.getSeconds());

    let timeOfDay = 'AM';

    //rotate the hands
    const h = hours * 30;
    const m = minutes * 6;
    const s = seconds * 6;

    handH.style.transform = `translate(-50%, -100%) rotate(${ h }deg)`;
    handM.style.transform = `translate(-50%, -100%) rotate(${ m }deg)`;
    handS.style.transform = `translate(-50%, -100%) rotate(${ s }deg)`;

    if (hours < 10)
    {
        hours = '0' + hours;
    }

    if (minutes < 10)
    {
        minutes = '0' + minutes;
    }

    if (time.getHours() < 12)
    {
        timeOfDay = 'AM';
    }
    else
    {
        timeOfDay = 'PM';
    }

    clockTime.innerText = `${ hours }:${ minutes } ${ timeOfDay }`;
    clockDate.innerText = `${ days[day] }, ${ months[month] } ${ date }`;
}

setInterval(setTime, 1000);

