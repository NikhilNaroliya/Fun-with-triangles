const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector("#hypotenuse-btn")
const outputEl=document.querySelector("#output");

function squares(base,height)
{
    const sumofsquares=(1/2)*(base*base+height*height);
    return sumofsquares;

}

function calculatehypo()
{
   const sumofsquares=squares(Number(sides[0].value),Number(sides[1].value))
    {
          const lenghtofhypo=Math.sqrt(sumofsquares);
          outputEl.innerText="The area of triangle is="+lenghtofhypo;
    }

}
hypotenuseBtn.addEventListener('click',calculatehypo)