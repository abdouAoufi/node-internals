const Emitter = require("events");

const emitter = new Emitter();

emitter.on("greet", function() {
    console.log("Some one said hello");
});

emitter.on("if", function() {
    console.log("Another one said Hi!");
});

emitter.emit("if");