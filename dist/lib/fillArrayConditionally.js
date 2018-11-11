"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fp_1 = require("lodash/fp");
var executeIfFunction_1 = require("./executeIfFunction");
var fn = function (conditions, valueContainer) { return fp_1.flow(fp_1.pickBy(function (condition) { return executeIfFunction_1.executeIfFunction(condition, valueContainer); }), fp_1.keys)(conditions); };
exports.fillArrayConditionally = fp_1.curry(fn);
//# sourceMappingURL=fillArrayConditionally.js.map