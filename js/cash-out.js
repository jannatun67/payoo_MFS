document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()
    
    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut)
    const cashOutPin = document.getElementById('cash-out-pin').value;
    // console.log(cashOut, cashOutPin);

    if (cashOutPin=== '1234') {
        console.log('Cash out to Your Account');

        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber-cashOutNumber;
        // console.log(newBalance);
        document.getElementById('account-balance').innerText= newBalance;
    }
    else{
        alert('Please try again!')
    }
})