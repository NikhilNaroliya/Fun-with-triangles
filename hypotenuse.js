const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector("#hypotenuse-btn")
const outputEl=document.querySelector("#output");

function squares(a,b)
{
    const sumofsquares=a*a+b*b;
    return sumofsquares;

}

function calculatehypo()
{
   const sumofsquares=squares(Number(sides[0].value),Number(sides[1].value))
    {
          const lenghtofhypo=Math.sqrt(sumofsquares);
          outputEl.innerText="The hypotenuse is="+lenghtofhypo+"cmsq";
    }

}
hypotenuseBtn.addEventListener('click',calculatehypo)