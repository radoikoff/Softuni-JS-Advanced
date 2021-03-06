const numberOperations = require('./numberOperations.js');
const expect = require('chai').expect;



describe("Tests", function () {
    describe('powNumber', function () {

        it('valid num', function () {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
        });

        it('invalid num', function () {
            expect(numberOperations.powNumber('2')).to.be.equal(4);
        });

    });

    describe('numberChecker', function () {
        it('string input', function(){
            expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
        });

        it('below 100, number', function(){
            expect(numberOperations.numberChecker('1')).to.be.equal('The number is lower than 100!');
        });

        it('above 100, number', function(){
            expect(numberOperations.numberChecker('101')).to.be.equal('The number is greater or equal to 100!');
        });

        it('100 exatly, number', function(){
            expect(numberOperations.numberChecker('100')).to.be.equal('The number is greater or equal to 100!');
        });


    });

    describe('sumArrays', function () {
        it('equal arrarys', function(){
            expect(numberOperations.sumArrays([1,2],[1,2])).to.be.deep.equal([2,4]);
        });

        it('left is longer', function(){
            expect(numberOperations.sumArrays([1,2,3],[1,2])).to.be.deep.equal([2,4,3]);
        });

        it('right is longer', function(){
            expect(numberOperations.sumArrays([1,2],[1,2,0])).to.be.deep.equal([2,4,0]);
        });



    });

});
