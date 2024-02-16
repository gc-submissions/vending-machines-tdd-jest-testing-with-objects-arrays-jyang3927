function formatCurrency(amount) {
    let fixedAmount = amount.toFixed(2); 
    if (fixedAmount < 0) {
        return(`-$${Math.abs(fixedAmount).toFixed(2)}`);
    }else {
        return (`$${fixedAmount}`);
    }
}

function getCoins(cents){
    let quartersNum = 0; 
    let dimesNum = 0; 
    let nickelsNum = 0;
    let penniesNum = 0;
    
    while(cents >= 25){
        quartersNum++; 
        cents = cents - 25;
    }
    while(cents >= 10){
        dimesNum++; 
        cents = cents - 10; 
    }
    while (cents >= 5){
        nickelsNum++; 
        cents = cents - 5; 
    }
    while (cents >= 1){
        penniesNum++; 
        cents = cents - 1;
    }
    let totalCoins = {quarters: quartersNum, dimes: dimesNum, nickels: nickelsNum, pennies: penniesNum}; 
    return totalCoins;

}

module.exports = {
    formatCurrency,
    getCoins
}; 