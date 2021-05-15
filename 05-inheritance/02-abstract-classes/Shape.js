"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_valX, _valY) {
        this._valX = _valX;
        this._valY = _valY;
    }
    Object.defineProperty(Shape.prototype, "valX", {
        get: function () {
            return this._valX;
        },
        set: function (valX) {
            this._valX = valX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "valY", {
        get: function () {
            return this._valY;
        },
        set: function (valY) {
            this._valY = valY;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
exports.Shape = Shape;
