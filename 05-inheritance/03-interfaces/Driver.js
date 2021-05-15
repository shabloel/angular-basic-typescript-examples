"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GolfInstructor_1 = require("./GolfInstructor");
var BasketBalInstructor_1 = require("./BasketBalInstructor");
var coachArr = [];
var golfInstructor = new GolfInstructor_1.GolfInstructor();
var basketbalInstructor = new BasketBalInstructor_1.BasketbalInstructor();
coachArr.push(golfInstructor);
coachArr.push(basketbalInstructor);
for (var _i = 0, coachArr_1 = coachArr; _i < coachArr_1.length; _i++) {
    var coach = coachArr_1[_i];
    console.log(coach.teachSport());
}
