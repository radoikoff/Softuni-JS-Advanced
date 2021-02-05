const { isOddOrEven } = require('./code');
//const { describe } = require('mocha');
const { expect } = require('chai');

describe("tests", () => {
    it('String with even lenght', () => {
        expect(isOddOrEven('aaaa')).to.equal('even');
    });
    
    it('String with odd lenght', () => {
        expect(isOddOrEven('12345')).to.equal('odd');
    });

    it('Array as parameter', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('Object as parameter', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });


});

