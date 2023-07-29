
function increamentDecrementButton(increase){
    const inputValue = document.getElementById('inputValue').value;
    const newInoutValue = parseFloat(inputValue);
    
    let input_count_num ;
    if(increase){
        input_count_num = newInoutValue +1;
        
    }else{
        input_count_num = newInoutValue -1;
    }
    document.getElementById('inputValue').value = input_count_num;
  

    return input_count_num;
}

function updatePrice (inpValue){
    const price = inpValue * 1200;
    document.getElementById("price").innerText = price; 
    
}

document.getElementById("phone_inc").addEventListener("click", function(){

   const input_value =  increamentDecrementButton(true);
   updatePrice(input_value);
   subTotal()
});
document.getElementById("phone_dec").addEventListener("click", function(){
   const input_value= increamentDecrementButton(false);
   updatePrice(input_value);
   subTotal()
})