/**
 * Created by KlimMalgin on 04.03.2015.
 */

/**
 * Здесь будет описание математических функторов типа
 * add,
 * sub,
 * div
 * и т.д.
 **/

var curry = require('core.lambda').curry,
    Option = require('fantasy-options').Option,
    // --
    fcommon = require('./fcommon'),
    operationWrap = fcommon.operationWrap,
    conditionResult = fcommon.conditionResult;

var addOp = curry(2, function (meV, valueV) { return Option.of(meV + valueV); });
var subOp = curry(2, function (meV, valueV) { return Option.of(meV - valueV); });

var divOp = curry(2, function (meV, valueV) { return conditionResult(valueV != 0, meV / valueV); });
var mulOp = curry(2, function (meV, valueV) { return Option.of(meV * valueV); });

module.exports = {

    add: operationWrap(addOp),
    sub: operationWrap(subOp),

    div: operationWrap(divOp),
    mul: operationWrap(mulOp)

};
