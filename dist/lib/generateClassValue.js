"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fillArrayConditionally_1 = require("./fillArrayConditionally");
exports.generateClassValue = function (conditions) {
    return function (valueContainer) { return fillArrayConditionally_1.fillArrayConditionally(conditions, valueContainer)
        .join(' '); };
};
//# sourceMappingURL=generateClassValue.js.map