const chai = require('chai');

const Iterator = function(items) {
    this.index = 0;
    this.items = items;
};


Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
};

function iterate() {
    let items = ["one", 2, "circle", true, "Applepie"];
    let iter = new Iterator(items);

    // using a for loop
    let iterArray = [];
    for (let item = iter.first(); iter.hasNext(); item = iter.next()) {
        iterArray.push(item);
    }

    // using Iterator's each method
    // iter.each(function(item) {
    //     console.log('single item is: ', item);
    // });

    return iterArray;
}

describe('Iterator Test', function () {
    it('Should return an Array', function () {
        // run();
        chai.expect(iterate()).to.be.an('array')

    });
});