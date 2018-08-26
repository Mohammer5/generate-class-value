"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeIfFunction = function (value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return typeof value === 'function'
        ? value.apply(void 0, args) : value;
};
//# sourceMappingURL=executeIfFunction.js.map