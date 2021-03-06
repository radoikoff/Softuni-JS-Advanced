class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
        this._freeSlots = this.capacity;
    }

    addCar(carModel, carNumber) {
        if (this._freeSlots <= 0) {
            throw new Error('Not enough parking space.');
        }

        this.vehicles.push({ carModel, carNumber, payed: false });
        this._freeSlots--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        const car = this.vehicles.find(v => v.carNumber == carNumber);

        if (car == undefined) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }

        this.vehicles.splice(this.vehicles.indexOf(car), 1);
        this._freeSlots++;

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        const car = this.vehicles.find(v => v.carNumber == carNumber);

        if (car == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (car.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        const car = this.vehicles.find(v => v.carNumber == carNumber);

        if (carNumber) {
            return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
        }

        let msg = [];
        msg.push(`The Parking Lot has ${this._freeSlots} empty spots left.`);
        this.vehicles
            .sort((a, b) => a.carModel.localeCompare(b.carModel))
            .forEach(car => msg.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`));

        return msg.join('\n');
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Alpha", "SA1111"));
console.log(parking.addCar("Beta", "SA2222"));
console.log(parking.addCar("Volvo", "SA3333"));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
console.log(parking.getStatistics());
