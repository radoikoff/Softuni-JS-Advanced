function createCatalog(input) {

    const catalog = {};
    for (const obj of input) {
        let [product, price] = obj.split(' : ');
        price = Number(price);

        let group = product.substr(0, 1);


        if (catalog[group] == undefined) {
            catalog[group] = [];
        }

        catalog[group].push({ product, price });
    }


    for (let [group, productArray] of Object.entries(catalog).sort()) {
        console.log(`${group}`);
        for (let obj of productArray.sort((a, b) => a.product.localeCompare(b.product))) {
            console.log(`  ${obj.product}: ${obj.price}`);
        }
    }
};

createCatalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);