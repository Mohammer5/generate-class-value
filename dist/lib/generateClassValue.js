"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fp_1 = require("lodash/fp");
var executeIfFunction_1 = require("./executeIfFunction");
exports.generateClassValue = function (conditions, props) { return fp_1.reduce(function (classNames, currentCondition, currentClassName) {
    return executeIfFunction_1.executeIfFunction(currentCondition, props)
        ? classNames.concat([currentClassName]) : classNames;
}, [], conditions).join(' '); };
//# sourceMappingURL=generateClassValue.js.map