const mainNums = document.querySelectorAll('#mainLoad .loadingNums span');
const mainLoadingContainer = document.querySelector('#mainLoad');
const mainLoadingCounter = document.querySelector('#mainLoadingCounter');

function runMainLoadingAnimation()
{
    mainNums.forEach((num, idx) =>
    {
        const lastNum = mainNums.length - 1;

        num.addEventListener('animationend', (e) =>
        {
            if (e.animationName === 'goIn' && idx !== lastNum)
            {
                num.classList.remove('loadingIn');
                num.classList.add('loadingOut');
            }
            else if (e.animationName === 'goOut' && num.nextElementSibling)
            {
                num.nextElementSibling.classList.add('loadingIn');
            }
            else
            {
                mainLoadingContainer.classList.add('hide');
                mainLoadingCounter.classList.add('hide');
                setTimeout(function () 
                {
                    mainLoadingContainer.classList.add('hidden');
                }, 500);
            }

        });
    });
}



runMainLoadingAnimation();

