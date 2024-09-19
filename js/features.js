document.getElementById('show-cash-out').addEventListener('click', function(){
    // console.log('hello');

    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('add-money-from').classList.add('hidden')
})


document.getElementById('add-Money-btn').addEventListener('click', function(){
    
    document.getElementById('add-money-from').classList.remove('hidden')
    document.getElementById('cash-out-from').classList.add('hidden')
})
