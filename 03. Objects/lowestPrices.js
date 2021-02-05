function lowestPrice(input) {

    const catalog = {};
    for (const obj of input) {
        let [town, product, price] = obj.split(' | ');
        price = Number(price);

        if (catalog[product] == undefined || price < catalog[product].price) {
            catalog[product] = { price, town };
        }

    }
    

    for (let [product, priceTown] of Object.entries(catalog)) {
        console.log(`${product} -> ${priceTown.price} (${priceTown.town})`);
    }


};

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);