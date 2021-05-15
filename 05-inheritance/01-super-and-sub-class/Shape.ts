export class Shape{

    constructor(private _valX: number, private _valY: number){

    }

    get valX(){
        return this._valX
    }

    get valY(){
        return this._valY
    }

    set valX(valX: number){
        this._valX = valX
    }

    set valY(valY: number){
        this._valY = valY
    }

    public getSurface(): number{
        return this._valX * this._valY
    }
}