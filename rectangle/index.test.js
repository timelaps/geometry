var b = require('@timelaps/batterie');
var rectangle = require('./');
b.describe('rectangle', function () {
    b.expect(rectangle).toBeFunction();
    b.expect(rectangle()).toBeNull();
    // b.expect(rectangle([30, 19, -30])).toBe(30);
});