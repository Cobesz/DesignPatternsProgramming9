const User = function(name) {
    this.name = name;

    this.say = function() {
        return 'User: ' + this.name;
    };
};

const DecoratedUser = function(user, street, city) {
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = function() {

        return "Decorated User: " + this.name + ", " +
            this.street + ", " + this.city;
        // log.add();
    };
};

function createUser(name, street, city) {

    let user = new User(name);
    console.log(user.say());

    let decorated = new DecoratedUser(user, street, city);
    console.log(decorated.say());

}

createUser('Sjaak', 'Broadway', 'New York');
createUser('Harrie', 'Laan op Zuid', 'Rotterdam');