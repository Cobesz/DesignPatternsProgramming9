// const assert = require('assert');
const chai = require('chai');

//factory function
const dog = () => {
    const sound = 'Woof';
    return {
        talk: () => {
            return sound
        }
    }
};

//use talk function within dog
// sniffles.talk();

describe('Factory Test', function () {
    it('Should return: Woof', function () {
        //make a new dog object
        const sniffles = dog();

        //Check if sniffles outputs Woof
        chai.expect(sniffles.talk()).to.equal('Woof');
    });
});

