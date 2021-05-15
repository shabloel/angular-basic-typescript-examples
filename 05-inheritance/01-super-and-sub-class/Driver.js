"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.prototype.calculateSurface = function (shape) {
        return shape.getSurface();
    };
    return Driver;
}());
var circle = new Circle_1.Circle(1, 2, 4);
var rectangle = new Rectangle_1.Rectangle(1, 2, 3, 2);
var myDriver = new Driver();
console.log(myDriver.calculateSurface(circle));
console.log(myDriver.calculateSurface(rectangle));
var shapesArray = [];
shapesArray.push(circle);
shapesArray.push(rectangle);
for (var _i = 0, shapesArray_1 = shapesArray; _i < shapesArray_1.length; _i++) {
    var shape = shapesArray_1[_i];
    console.log(shape.getSurface());
}
