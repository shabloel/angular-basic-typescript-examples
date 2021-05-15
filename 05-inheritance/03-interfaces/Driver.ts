import {Coach} from './Coach'

import {GolfInstructor} from './GolfInstructor'

import {BasketbalInstructor} from './BasketBalInstructor'

let coachArr: Coach[] = [];

let golfInstructor = new GolfInstructor();
let basketbalInstructor = new BasketbalInstructor();

coachArr.push(golfInstructor);
coachArr.push(basketbalInstructor);

for(let coach of coachArr){
    console.log(coach.teachSport());
}