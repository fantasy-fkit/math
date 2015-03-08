/**
 * Created by KlimMalgin on 04.03.2015.
 */

var curry = require('core.lambda').curry;

var addOp = curry(2, function (meV, valueV) { return meV + valueV; });
var subOp = curry(2, function (meV, valueV) { return meV - valueV; });

var divOp = curry(2, function (meV, valueV) { return valueV != 0 ? meV / valueV : null; });
var mulOp = curry(2, function (meV, valueV) { return meV * valueV; });

module.exports = {

    add: function (valueO) {
        return this.operation(addOp)(valueO));
    },
    sub: function (valueO) {
        return this.operation(subOp)(valueO);
    },

    div: function (valueO) {
        return this.operationWrap(divOp)(valueO);
    },
    mul: function (valueO) {
        return this.operationWrap(mulOp)(valueO);
    }

};
