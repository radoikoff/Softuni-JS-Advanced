class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number')
        }

        this._budget = value;
    }

    shopping([product, price]) {
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(product);
        this.budget -= price;

        return `You have successfully bought ${product}!`
    }

    recipes({ recipeName, productsList }) {
        if (productsList.every(p => this.products.includes(p))) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`
        } else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish) {
        if (this.dishes.some(d=> d.recipeName == dish) == false) {
            throw new Error('We do not have this dish');
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = '';
        for (let name in this.guests) {
            const recipe = this.guests[name];
            const products = this.dishes.find(d=> d.recipeName == recipe).productsList;
            result += `${name} will eat ${recipe}, which consists of ${products.join(', ')}\n`;
        }
        return result.trim();
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
//console.log(dinner.products)
dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
//console.log(dinner.guests)
//console.log(dinner.dishes)

console.log(dinner.showAttendance());
/*
*/