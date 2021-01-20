function carFactory(req) {
    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power > 90 && power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    };

    const carriage = {
        hatchback: { type: 'hatchback', color: req.color },
        coupe: { type: 'coupe', color: req.color }
    };

    const weelDiameter = 2 * Math.ceil(req.wheelsize / 2) - 1;

    const car = {
        model: req.model,
        engine: getEngine(req.power),
        carriage: carriage[req.carriage],
        wheels: [weelDiameter, weelDiameter, weelDiameter, weelDiameter]
    }

    return car;
};

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));