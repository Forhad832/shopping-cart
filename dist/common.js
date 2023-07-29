function fun(elementId){
    
    const sub_total=document.getElementById(elementId).innerText;
    const new_sub_total = parseFloat(sub_total);
     return new_sub_total;
}
function fun2(){
    const a = fun('price');
    const b = fun('price2');
    const reslt = a + b;
    document.getElementById("sub_total").innerText= reslt;
}