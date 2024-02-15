function sub(total,exp){
    return(total-exp)
    }
    function expense() {
        var data = document.getElementById('expense').value;
        var totalAmountElement = document.getElementById('totalAmt');
        var totalAmount = parseFloat(totalAmountElement.textContent); 
        var amount = parseFloat(document.getElementById('expenseAmt').value);
    
        const purse = sub(totalAmount, amount);
        totalAmountElement.textContent = purse;
        
        var expSec = document.getElementById('expSec');
        var card = document.createElement('div');
        var h1 = document.createElement('h1');
        var h2 = document.createElement('h2');
        card.classList.add('card');
        h1.textContent = 'Expense: ' + data;
        h2.textContent = 'Amount -₹' + amount;
        expSec.appendChild(card);
        card.appendChild(h1);
        card.appendChild(h2);
    }

    function sum(total,exp){
        return(total+exp)
        }
        function revenue() {
            var data = document.getElementById('revenue').value;
            var totalAmountElement = document.getElementById('totalAmt');
            var totalAmount = parseFloat(totalAmountElement.textContent); 
            var amount = parseFloat(document.getElementById('revenueAmt').value);
        
            const purse = sum(totalAmount, amount);
            totalAmountElement.textContent = purse;
            
            var revSec = document.getElementById('revSec');
            var card = document.createElement('div');
            var h1 = document.createElement('h1');
            var h2 = document.createElement('h2');
            h2.classList.add('green')
            card.classList.add('card');
            h1.textContent = 'Expense: ' + data;
            h2.textContent = 'Amount +₹' + amount;
            revSec.appendChild(card);
            card.appendChild(h1);
            card.appendChild(h2);
        }
