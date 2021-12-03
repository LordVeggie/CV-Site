const page3 = document.querySelector('#example3');

const themeToggel = document.querySelector('.themeToggel');

const handH = document.querySelector('.hour');
const handM = document.querySelector('.minute');
const handS = document.querySelector('.second');

const clockTime = document.querySelector('.clockTime');
const clockDate = document.querySelector('.clockDate');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

    const month = time.getMonth();
    const day = time.getDay();

    const hours = (time.getHours() % 12);
    const minutes = (time.getMinutes());
    const seconds = (time.getSeconds());

    //rotate the hands
    const h = hours * 30;
    const m = minutes * 6;
    const s = seconds * 6;

    handH.style.transform = `translate(-50%, -100%) rotate(${ h }deg)`;
    handM.style.transform = `translate(-50%, -100%) rotate(${ m }deg)`;
    handS.style.transform = `translate(-50%, -100%) rotate(${ s }deg)`;

    clockTime.textContent = `${ hours }:${ minutes }`;

    console.log(h + 'h : ' + m + 'm :' + s);
}

setInterval(setTime, 1000);

