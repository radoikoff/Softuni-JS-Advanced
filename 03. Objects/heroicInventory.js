function createInventory(input) {

    const result = [];
    for (const obj of input) {
        let [name, level, items] = obj.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }

    return JSON.stringify(result);
};

console.log(createInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));