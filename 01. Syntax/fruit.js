function priceCalc(fruit, weight, price){
    const weightKg = weight/1000;
    const totalPrice = price*weightKg;

    return `I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(priceCalc('orange', 2500, 1.80));
console.log(priceCalc('apple', 1563, 2.35));