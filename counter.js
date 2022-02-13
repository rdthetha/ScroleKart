var cartPlus=document.querySelectorAll('.ec-plus');
var cartMinus=document.querySelectorAll('.ec-minus');


cartMinus.forEach(decrease=>{decrease.addEventListener("click",(event)=>{

    quantity = event.target.nextElementSibling;
    if(quantity.innerText>0)
        {
            quantity.innerText= Number(quantity.innerText ) - 1;
        } 
    
})});
cartPlus.forEach(increase=>{increase.addEventListener("click",(event)=>{

    quantity = event.target.previousElementSibling;

        quantity.innerText = Number(quantity.innerText) + 1;
})});
