const chai = require('chai');

const animals = [];

//factory function
const dog = (name) => {
    const sound = 'Woof';
    const type = 'Dog';
    return {
        talk: () => {
            return sound + ' my name is ' + name
        },
        name, type
    }
};

const cat = (name) => {
    const sound = 'Miauw';
    const type = 'Cat';
    return {
        talk: () => {
            return sound + ' my name is ' + name
        },
        name, type
    }
};


describe('Factory Test', function () {
    it('Should return: Woof and his name', function () {

        //make a new dog object
        const sniffles = dog('sniffles');

        //Check if sniffles outputs Woof
        chai.expect(sniffles.talk()).to.equal('Woof my name is ' + sniffles.name);
    });
});


//make a new dog object
const sniffles = dog('Sniffles');

const bagheera = cat('Bagheera');

animals.push(sniffles, bagheera);


module.exports = {
    animals: function () {
        return animals;
    }
};
