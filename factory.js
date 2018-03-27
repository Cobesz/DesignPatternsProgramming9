const chai = require('chai');

let dogNames = [];

//factory function
const dog = (name) => {
    const sound = 'Woof';
    const dogName = name;
    return {
        talk: () => {
            return sound + ' my name is ' + dogName
        },
        dogName
    }
};

describe('Factory Test', function () {
    it('Should return: Woof and his name', function () {

        //make a new dog object
        const sniffles = dog('sniffles');

        //Check if sniffles outputs Woof
        chai.expect(sniffles.talk()).to.equal('Woof my name is ' + sniffles.dogName);
    });
});

//make a new dog object
const sniffles = dog('Sniffles');
const puffy = dog('Puffy');

dogNames.push(sniffles.dogName, puffy.dogName);

module.exports = {
    dogNames: function () {
        return dogNames;
    }
};