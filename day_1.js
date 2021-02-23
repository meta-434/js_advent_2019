const day_1_data = require ('./day_1_data');

function fuelCalculator (mass) {
    return (Math.floor(mass / 3) - 2);
}

function day_1 (dataset) {
    return dataset.reduce((acc, cv) => {
        return acc + fuelCalculator(cv);
    }, 0);
}

day_1(day_1_data);

module.exports = day_1;