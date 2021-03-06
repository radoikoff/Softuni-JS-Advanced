const dealership = require('./dealership.js');
const expect = require('chai').expect;



describe("Tests", function () {
    describe("newCarCosts", function () {

        it('apply discount', function () {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.be.equal(15000);
        });

        it('do not apply discount', function () {
            expect(dealership.newCarCost('a', 30000)).to.be.equal(30000);
        });
    });

    describe("carEquipment", function () {

        it('valid pick', function () {
            expect(dealership.carEquipment(['a'], [0])).to.be.deep.equal(['a']);
        });

        it('invalid pick', function () {
            expect(dealership.carEquipment(['a'], [1])).to.be.deep.equal([undefined]);
        });
    });

    describe("euroCategory", function () {

        it('below 4', function () {
            expect(dealership.euroCategory(1)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('above 4', function () {
            expect(dealership.euroCategory(5)).to.be.equal('We have added 5% discount to the final price: 14250.');
        });

        it('exact 4', function () {
            expect(dealership.euroCategory(4)).to.be.equal('We have added 5% discount to the final price: 14250.');
        });

    });
});
