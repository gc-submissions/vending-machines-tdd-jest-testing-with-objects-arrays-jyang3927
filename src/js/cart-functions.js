function calculateChange(total, payment) {
    let change = payment - total;
    return (Number(change.toFixed(2)));
};

function isSufficientPayment(total, payment) {
    if (payment >= total) {
        return true; 
    }else {
        return false; 
    }
}

function calculateTotal(itemsArray) {
   let sum =  itemsArray.reduce((sum, number) => sum + number.price, 0); 
   return Number(sum.toFixed(2)); 
}

function addItem(itemsArray, name, price) {
    itemsArray.push({name:name, price:price});
}

function removeItem(itemsArray, index){
    itemsArray.splice(index, 1);
}

module.exports = {
    calculateChange, 
    isSufficientPayment, 
    calculateTotal, 
    addItem, 
    removeItem
}