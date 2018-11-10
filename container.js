const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const deps = [
    ['_', 'lodash']
];

deps.forEach(function(val) {
    container.register(val[0], function() {
        return require(val[1]);
    })
});

container.load(__dirname, '/controllers');
container.load(__dirname, '/helpers');

container.register('container', function() {
    return container;
});

module.exports = container;
