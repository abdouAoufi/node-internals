const Emitter = function() {
    this.events = {};
};

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

Emitter.prototype.emitte = function(type) {
    this.events[type].forEach((fn) => fn());
};

module.exports = Emitter;