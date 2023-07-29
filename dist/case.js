
function updateInputValue2(increase){
    const inputValue2 = document.getElementById('inputValue2').value;
    const newInputValue2 = parseFloat(inputValue2);
    

    let increamentValue2;
    if(increase){
        increamentValue2 = newInputValue2 + 1;
        document.getElementById('inputValue2').value = increamentValue2;
    }else{
        increamentValue2 = newInputValue2 - 1;
        document.getElementById('inputValue2').value = increamentValue2;

    }
  return increamentValue2;
    
}


function updatePrice2(countnum){
    const total_price =  countnum * 120;
    document.getElementById("price2").innerText = total_price;
 
}
document.getElementById("increament2").addEventListener("click", function(){
  const increamentValue2 =  updateInputValue2(true);
  updatePrice2(increamentValue2);
  fun2()
 
})
document.getElementById("decreament2").addEventListener("click", function(){
   const decreamentValue2 = updateInputValue2(false);
   updatePrice2(decreamentValue2);
   fun2();

})