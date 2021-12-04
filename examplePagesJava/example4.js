const page4 = document.querySelector('#example4');

const nums = document.querySelectorAll('.loadingNums span');
const example4LoadingContainer = document.querySelector('#example4LoadingContainer');
const example4LoadingCounter = document.querySelector('#example4LoadingCounter');

let wasOpend = false;

function runLoadingAnimation()
{
    nums.forEach((num, idx) =>
    {
        const lastNum = nums.length - 1;

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
                example4LoadingContainer.classList.add('hide');
                example4LoadingCounter.classList.add('hide');

                setTimeout(function () 
                {
                    example4LoadingContainer.classList.add('hidden');
                    console.log('hello');
                }, 500);
            }

        });
    });
}

function clickedOnExample()
{
    if (!wasOpend && (page4.parentElement.parentElement).classList.contains('ActiveExampleContainer'))
    {
        runLoadingAnimation();
        wasOpend = true;
    }
    //console.log((page4.parentElement.parentElement).classList.contains('ActiveExampleContainer'));
}

setInterval(clickedOnExample, 1000);
