const chai = require('chai');

// import factory.js
const factory = require('./factory');

let dogNames = factory.dogNames();

const Iterator = function (items) {
    this.index = 0;
    this.items = items;
};


Iterator.prototype = {
    first: function () {
        this.reset();
        return this.next();
    },
    next: function () {
        return this.items[this.index++];
    },
    hasNext: function () {
        return this.index <= this.items.length;
    },
    reset: function () {
        this.index = 0;
    },
    each: function (callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
};

function iterate() {
    this.iterate = new Iterator(dogNames);

    return this.iterate;
}

// passing iterate method to decator file. This way I can use the logic there.
module.exports = {
    iterate: function () {
        return iterate();
    }
};