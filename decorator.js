const User = function(name) {
    this.name = name;

    this.say = function() {
        log.add("User: " + this.name);
    };
};

const DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;  // ensures interface stays the same
    this.street = street;
    this.city = city;

    this.say = function() {
        log.add("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };
};

// logging helper

const log = (function() {
    let log = "";

    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();

function run() {

    let user = new User("Kelly");
    user.say();

    let decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();

    log.show();
}

run();