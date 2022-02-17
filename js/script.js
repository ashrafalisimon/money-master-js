// salary and monthly cost input
function getInputValue( inputNumber) {
    const input = document.getElementById(inputNumber);
        const inputConvertNumber = parseInt(input.value);
        return inputConvertNumber;
}
// monthly total cost
function getTotalCost() {
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const othersCost = getInputValue('others-cost');
    const messError = document.getElementById('error-mess-fail');
    if(foodCost>0 && rentCost>0 && othersCost>0){
        const totalCost = foodCost + rentCost + othersCost;
      // update on the html
        document.getElementById('total-expenses').innerText = totalCost;
        return totalCost;
    }
    else{
        messError.style.display = 'block';
    }
    
   
}
//monthly total balance
function getTotalBalance(){
    const incomeSalary = getInputValue('income-salary');
    const totalCost = getTotalCost();
    const messError2 = document.getElementById('error-mess-fail2');
    const messError = document.getElementById('error-mess-fail');
    if(incomeSalary>0 && totalCost>0){
        if(incomeSalary > totalCost){
            const totalBalance = incomeSalary - totalCost ;
    // update on the html
         document.getElementById('total-balance').innerText = totalBalance;
        return totalBalance;
        }
        else{
            messError2.style.display = 'block';
        }
        
    }
    else{
        messError.style.display = 'block';
    }
    
}
// monthly saving & remaining balance
function getSavingCalculate(){
    const incomeSalary = getInputValue('income-salary'); 
    const salarySave = getInputValue('salary-save');
    const totalBalance = getTotalBalance();
    const messError = document.getElementById('error-mess-fail');
    const messError3 = document.getElementById('error-mess-fail3');

    if(salarySave>0 && incomeSalary>0){
        if(salarySave < incomeSalary){
            const savingAmount = incomeSalary / salarySave;
            const remainingBalance = totalBalance  - savingAmount;
              // update on the html
            document.getElementById('saving-account').innerText = savingAmount;
            document.getElementById('remaining-balance').innerText = remainingBalance;
        }
        else{
            messError3.style.display = 'block';
        }
       
    }
    else{
        messError.style.display = 'block';
    }
   
}

// calculate Button event listener
document.getElementById('calculate-button').addEventListener('click', function(){
   
        getTotalBalance();
        getTotalCost()

});

// save button calculate 
document.getElementById('save-button').addEventListener('click', function(){
   getSavingCalculate()
});