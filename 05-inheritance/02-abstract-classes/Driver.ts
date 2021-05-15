import { Rectangle } from './Rectangle';
import {Shape} from './Shape'
import {Circle} from './Circle'


let circle: Shape  = new Circle(1, 2, 3);

let rectangle: Rectangle = new Rectangle(1, 3, 2, 3);

let shapeArr: Shape[] = [];

shapeArr.push(circle);
shapeArr.push(rectangle);

for(let shape of shapeArr){
    console.log("Surface: " + shape.getSurface())
}