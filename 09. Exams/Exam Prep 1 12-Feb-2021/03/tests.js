const pizzUni = require('./pizzUni.js');
const expect = require('chai').expect;



describe("Tests", function() {
    describe('MakeAnOrder', function() {

        it("throw when miising prop", function() {
            expect(() => pizzUni.makeAnOrder({})).to.throw('You must order at least 1 Pizza to finish the order.')
        });

        it("pizza only", function() {
            expect(pizzUni.makeAnOrder({orderedPizza: 'a'})).to.be.equal('You just ordered a');
        });

        it("pizza and drink", function() {
            expect(pizzUni.makeAnOrder({orderedPizza: 'a', orderedDrink: 'b'})).to.be.equal('You just ordered a and b.');
        });
     });

     describe('getRemainingWork', function() {
        it('all ready', function() {
            expect(pizzUni.getRemainingWork([{pizzaName: 'a', status: 'ready'}])).to.be.equal('All orders are complete!');
        });

        it('not ready', function() {
            const statArr = [{pizzaName: 'a', status: 'preparing'}];
            expect(pizzUni.getRemainingWork(statArr)).to.be.equal('The following pizzas are still preparing: a.');
        });

        it('not ready two pizzas', function() {
            const statArr = [{pizzaName: 'a', status: 'preparing'}, 
                             {pizzaName: 'b', status: 'ready'},
                             {pizzaName: 'c', status: 'preparing'}];
            expect(pizzUni.getRemainingWork(statArr)).to.be.equal('The following pizzas are still preparing: a, c.');
        });
        
     });

     describe('orderType', function() {
        it('no discount', function() {
            expect(pizzUni.orderType(100, 'Delivery')).to.be.equal(100);
        });

        it('with discount', function() {
            expect(pizzUni.orderType(100, 'Carry Out')).to.be.equal(90);
        });
        
     });
});
