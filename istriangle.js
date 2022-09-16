const inputs=document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector("#is-tringle-btn");
const outputEl=document.querySelector("#output");

function calculatesumofAngles(angle1,angle2,angle3)
{
    const sumofAngles=angle1+angle2+angle3;
    
    return sumofAngles;
}

function isTriangle(){
   const sumofAngles=calculatesumofAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if(sumofAngles===180)
     {
      
        outputEl.innerHTML="its a triangle"
     }
     else{
        outputEl.innerHTML="its not a triangle"
     }

}
isTriangleBtn.addEventListener("click",isTriangle);