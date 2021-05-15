import {Shape} from './Shape'
import {Circle} from './Circle'
import {Rectangle} from './Rectangle'

class Driver{

    calculateSurface(shape: Shape): number{
        return shape.getSurface();
    }
}

let circle: Shape = new Circle(1, 2, 4,);
let rectangle: Shape = new Rectangle(1, 2, 3, 2);

let myDriver = new Driver();

console.log(myDriver.calculateSurface(circle));
console.log(myDriver.calculateSurface(rectangle));

let shapesArray: Shape[] = [];

shapesArray.push(circle);
shapesArray.push(rectangle);

for(let shape of shapesArray){
    console.log(shape.getSurface())
}