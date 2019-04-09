var subtotal=document.getElementById('subtotal')
var tip = document.getElementById('tip')
var total = document.getElementById('total')


 function calcTip (percent) {
 var subtotalValue=Number (subtotal.value)
 var tipValue=subtotalValue*percent
 tip.value=tipValue
   total.value=tipValue
   total.innerHTML= '$' (tipValue + subtotalValue)
}
function updateCustomTip() {

  total.innerHTML = '$' + (Number(tip.value) + Number(subtotal.value))
                         
}