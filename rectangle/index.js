module.exports = rectange;
var reduce = require('@timelaps/array/reduce');
var min = require('@timelaps/number/min');
var max = require('@timelaps/number/max');
var isNumber = require('@timelaps/is/number');
var dimensions = ['top', 'left', 'right', 'bottom'];
var alternateFn = {
    right: true,
    bottom: true
};

function rectangle(bounds) {
    if (!bounds.length) {
        return null;
    }
    return reduce(dimensions, function (memo, dimension) {
        var defaultValue = Infinity;
        var minmaxer = min;
        if (alternateFn[dimension]) {
            defaultValue = -Infinity;
            minmaxer = max;
        }
        var list = reduce(bounds, function (memo, bound) {
            var value = bound[dimension];
            list.push(isNumber(value) ? value : defaultValue);
            return memo;
        }, []);
        memo[dimension] = minmaxer(list);
        return memo;
    }, {});
}
