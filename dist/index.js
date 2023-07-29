function updateInputValue(increase){
    const inputValue = document.getElementById("inputValue").value;
    const newInputValue = parseInt(inputValue);


    if(increase){
        const updateinputValue = newInputValue + 1;
        document.getElementById("inputValue").value = updateinputValue;
        return updateinputValue;
    }else{
        const updateinputValue = newInputValue - 1;
        document.getElementById("inputValue").value = updateinputValue;
        return updateinputValue;
    }
  
    
}
function updatePrice(countnum){
    const totalPrice = 1200 *  countnum;
    const price = document.getElementById("price");
    price.innerText = totalPrice;
    
}

document.getElementById("increament").addEventListener("click", function(){
  const increamentValue =  updateInputValue(true);
  
  updatePrice(increamentValue);
  fun2()
});

document.getElementById("decreament").addEventListener("click", function(){
    const decreamentValue = updateInputValue(false);
    updatePrice(decreamentValue);
    fun2()
});
