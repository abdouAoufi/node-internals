const { off } = require("process");
const util = require("util");

function Person() {
    (this.firstName = "Aoufi"), (this.lastName = "Abderahmane");
}

Person.prototype.greet = function() {
    console.log("Hello " + this.firstName);
};

const PoliceMan = function() {
    Person.call(this);
    this.badgeNumbe = 1234;
};

util.inherits(PoliceMan, Person);
const office = new PoliceMan();
office.greet();