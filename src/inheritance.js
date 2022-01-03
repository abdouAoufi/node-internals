const person = {
    firstName: "Aoufi",
    lastName: "Abderahmane",
    age: 22,
    sayName: function() {
        console.log(this.firstName + " " + this.lastName);
    },
};

const abdou = Object.create(person);
abdou.firstName = "Brahim";
abdou.sayName();