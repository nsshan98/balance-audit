// // Login Button
// const submitBtn = document.getElementById('submit-btn')
// submitBtn.addEventListener('click', function(){
//     const interfaceArea = document.getElementById('interface-area')
//     interfaceArea.style.display = 'none'
//     const auditArea = document.getElementById('audit-area')
//     auditArea.style.display = 'block'
// })

// Call Function for get data from localStorage

function updateDeposit() {
    const currentDeposit = parseFloat(localStorage.getItem('currentDeposit')) || '00';
    document.getElementById('currentDeposit').innerText = currentDeposit;
}

function updateWithdraw() {
    const currentWithdraw = parseFloat(localStorage.getItem('currentWithdraw')) || '00';
    document.getElementById('currentWithdraw').innerText = currentWithdraw;
}

function updateBalance() {
    const currentBalance = parseFloat(localStorage.getItem('currentBalance')) || '00';
    document.getElementById('currentBalance').innerText = currentBalance;
}

// Update the initial balance on page load
updateBalance();
updateDeposit();
updateWithdraw();

// Deposit Button
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    if(isNaN(depositAmount) || depositAmount == '' || depositAmount < 0){
        alert('Please Enter a Valid Deposit Amount. You Entered ' + depositAmount);
    }
    else {
        // Update the current deposit
        const currentDeposit = document.getElementById('currentDeposit').innerText;
        const currentDepositAmount = parseFloat(currentDeposit);
        const totalDepositAmount = currentDepositAmount + depositNumber;
        document.getElementById('currentDeposit').innerText = totalDepositAmount;

        // Update the balance
        const currentBalance = parseFloat(localStorage.getItem('currentBalance')) || 0;
        const totalBalance = depositNumber + currentBalance;
        localStorage.setItem('currentBalance', totalBalance);
        updateBalance();
        localStorage.setItem('currentDeposit', totalDepositAmount);
        updateDeposit();

        document.getElementById('depositAmount').value = '';
    }
});

// Withdraw Button
const withdrawBtn = document.getElementById('withdraw')
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value
    const withdrawNumber = parseFloat(withdrawAmount)


    if(isNaN(withdrawAmount) || withdrawAmount == '' || withdrawAmount < 0){
        alert('Please Enter Valid Deposit Amount. You Entered ' + withdrawAmount)
    }
    else {
        // Update the current withdraw
        const currentWithdraw = document.getElementById('currentWithdraw').innerText
        const currentWithdrawAmount = parseFloat(currentWithdraw)
        const totalWithdrawAmount =  withdrawNumber + currentWithdrawAmount
        document.getElementById('currentWithdraw').innerText = totalWithdrawAmount
        localStorage.setItem('currentWithdraw', totalWithdrawAmount);
        updateWithdraw();
        
    
        // Update the balance
        const currentBalance = document.getElementById('currentBalance').innerText
        const currentAmountBalance = parseFloat(currentBalance)
        const totalBalance =  currentAmountBalance - withdrawNumber
        document.getElementById('currentBalance').innerText = totalBalance
        localStorage.setItem('currentBalance', totalBalance);
        updateBalance();
    
        document.getElementById('withdrawAmount').value = ''
    }



})