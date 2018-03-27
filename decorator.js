const chai = require('chai');

// import factory.js
const iterator = require('./iterator');

let iterate = iterator.iterate();

function dogName() {
    let iterArray = [];

// using Iterator's each method to loop through all items
    iterate.each(function (item) {
        // use this number to manipulate the length, by this you also know the amount of dogs you're getting back
        if (iterArray.length < 2) {
            iterArray.push(item);
        }
    });


    // if I only want the first
    // iterArray.push(iterate.first());

    return iterArray;
}

const User = function (name) {
    this.name = name;

    this.say = function () {
        return 'User: ' + this.name;
    };
};

const DecoratedUser = function (user, race, color) {
    this.name = user.name;
    this.race = race;
    this.color = color;

    this.say = function () {

        return "Decorated Dog: " + 'His/her name is ' + this.name + ", " + 'the race is a ' +
            this.race + ", " + 'and the color is ' + this.color;
    };
};

function createUser(name, race, color) {

    let user = new User(name);

    //adds name, race and color to new object
    let decorated = new DecoratedUser(user, race, color);

    console.log(decorated.say());

}

//unit test
describe('Iterator Test', function () {
    it('Should return an Array', function () {
        chai.expect(dogName()).to.be.an('array');
    });
});

createUser(dogName()[0], 'Poodle', 'Grey');
createUser(dogName()[1], 'Jack Russel', 'White');