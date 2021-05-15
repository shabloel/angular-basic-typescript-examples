"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var circle = new Circle_1.Circle(1, 2, 3);
var rectangle = new Rectangle_1.Rectangle(1, 3, 2, 3);
var shapeArr = [];
shapeArr.push(circle);
shapeArr.push(rectangle);
for (var _i = 0, shapeArr_1 = shapeArr; _i < shapeArr_1.length; _i++) {
    var shape = shapeArr_1[_i];
    console.log("Surface: " + shape.getSurface());
}
