function inputValueUpdate(increase){
    const inputValue2 = document.getElementById("inputValue2").value;
    const newInputValue2 = parseFloat(inputValue2);

  let input_val ;

        if(increase){
            input_val = newInputValue2 + 1;
            
        }else{
            input_val = newInputValue2 - 1;
            
        }
        
        document.getElementById("inputValue2").value = input_val;
        return input_val;
  
    
}
function updatePrice2(val){
    const total_price = 120 * val;
    document.getElementById('price2').innerText = total_price;
}

function calculate(elementId){
    const sub_total = document.getElementById(elementId).innerText;
    const newSub_total = parseFloat(sub_total);
    return newSub_total;
}
function subTotal(){

    const a = calculate('price');
    const b = calculate('price2');
    const SubTotalPrice = a + b;
    document.getElementById('sub_total').innerText = SubTotalPrice;

}

document.getElementById("case_inc").addEventListener("click", function(){
   const input_val = inputValueUpdate(true);

   updatePrice2(input_val);
   subTotal()
});

document.getElementById("case_dec").addEventListener("click", function(){
    const input_val = inputValueUpdate(false);

   updatePrice2(input_val);
   subTotal()

})