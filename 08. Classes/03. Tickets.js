function sortTickets(ticketsData, sortField) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = Number(price),
                this.status = status
        };

    }

    const sortFunc = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status),
    };

    tickets = ticketsData.map((t) => {
        [dest, price, stat] = t.split('|');
        return new Ticket(dest, price, stat);
    });


    const result = tickets.sort(sortFunc[sortField]);
    return result;
}

console.log(sortTickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|12.20|departed'],
    'price'
));
