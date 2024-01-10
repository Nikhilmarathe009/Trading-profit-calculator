let amount = document.getElementById('amount')
let loss = document.getElementById('loss')
let profit = document.getElementById('profit')
let total_earning = document.getElementById('total_earning')
let btn = document.getElementById('result')
let loss_percentage = document.getElementById('loss_percentage')
let profit_percentage = document.getElementById('profit_percentage')
let div = document.getElementById('div')

function losses(){
 a = amount.value
 i = 0
 while ( i < Number(loss.value)){
    i = i + 1
    final_amount = Number(loss_percentage.value) / 100 * Number(a) 
    a = Number(a) - final_amount  
    console.log(a)
   }  
    function profits(){
        b = a
        i = 0
        while ( i < Number(profit.value)){
           i = i + 1
           final_amount = Number(profit_percentage.value) / 100 * Number(b) 
           b =  final_amount + Number(b)
           console.log(b)      
           total_earning.innerText = 'your total earning is' + " " +  Math.floor(b - Number(amount.value)) 
    }}
 profits()
}
 


                 
         
 
    


btn.addEventListener('click',function(){
    losses()
    

})