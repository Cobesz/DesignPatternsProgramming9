const chai = require('chai');

// import factory.js
const iterator = require('./iterator');

const iterate = iterator.iterate();

function animals() {
    let iterArray = [];


// using Iterator's each method to loop through all items
    iterate.each(function (item) {
        // use this number to manipulate the length, by this you also know the maximum amount of dogs you're getting back
        if (iterArray.length < 3) {
            iterArray.push(item);
        }
    });

    // if I only want the first
    // iterArray.push(iterate.first());

    return iterArray;
}

const Animal = function (animal) {
    this.originalName = animal.name;
    this.type = animal.type;

    this.say = function () {
        return 'Original animal: ' + this.originalName;
    };

    return this.originalName + this.type;
};

const DecoratedAnimal = function (animal, color) {
    this.color = color;

    this.say = function () {

        return animal.originalName + ' I am a '  + animal.type + ' the color is ' + this.color;
    };
};


function createCreature(animal, color) {

    let creature = new Animal(animal);

    //adds name, race and color to new object
    let decoratedCreature = new DecoratedAnimal(creature, color);

    console.log(decoratedCreature.say());

}

//unit test
describe('Iterator Test', function () {
    it('Should return an Array', function () {
        chai.expect(animals()).to.be.an('array');
    });
});

createCreature(animals()[0], 'Grey');
createCreature(animals()[1], 'Green');