document.getElementById('btn-add-money').addEventListener('click', function(event){
   event.preventDefault()
   
    const addMoney= document.getElementById('input-add-money').value
    const inputPinNumber= document.getElementById('input-pin').value
    // console.log(addMoney, inputPinNumber);
    
    if (inputPinNumber==='1234') {
        console.log('adding money to add your account');
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);
       const addMoneyNumber= parseFloat(addMoney)
       const balanceNumber = parseFloat(balance);
       const newBalance = addMoneyNumber+ balanceNumber;

        // console.log(newBalance);
        document.getElementById('account-balance').innerText= newBalance
    }
    else{
        alert('Filed to add money!')
    }
})